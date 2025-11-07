import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

const LiveDataContext = createContext({ prices: [], executions: [] });

export function LiveDataProvider({ children, backendUrl }) {
  const [prices, setPrices] = useState([]);
  const [executions, setExecutions] = useState([]);
  const wsRef = useRef(null);

  const fetchSnapshot = async () => {
    try {
      const [pRes, eRes] = await Promise.all([
        fetch(`${backendUrl}/api/prices`).then(r => r.json()),
        fetch(`${backendUrl}/api/executions`).then(r => r.json()),
      ]);
      setPrices(pRes);
      setExecutions(eRes);
    } catch (e) {
      // no-op fallback
    }
  };

  useEffect(() => {
    fetchSnapshot();
    const wsUrl = backendUrl.replace('http', 'ws') + '/ws/stream';
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;
    ws.onmessage = (ev) => {
      try {
        const data = JSON.parse(ev.data);
        if (data.type === 'snapshot') {
          setPrices(data.prices || []);
          setExecutions(data.executions || []);
        }
      } catch {}
    };
    ws.onclose = () => {
      // attempt reconnection after delay
      setTimeout(() => fetchSnapshot(), 1000);
    };
    return () => ws.close();
  }, [backendUrl]);

  const value = useMemo(() => ({ prices, executions }), [prices, executions]);
  return (
    <LiveDataContext.Provider value={value}>{children}</LiveDataContext.Provider>
  );
}

export function useLiveData() {
  return useContext(LiveDataContext);
}
