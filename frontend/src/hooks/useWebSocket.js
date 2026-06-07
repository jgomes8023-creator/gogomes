// Custom React hook for WebSocket communication
import { useEffect, useRef } from 'react';

const useWebSocket = (url) => {
  const websocket = useRef(null);

  useEffect(() => {
    websocket.current = new WebSocket(url);

    websocket.current.onopen = () => {
      console.log("WebSocket connected");
    };

    websocket.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    websocket.current.onerror = (error) => {
      console.error("WebSocket error", error);
    };
    
    return () => {
      websocket.current.close();
    };
  }, [url]);

  const sendMessage = (message) => {
    if (websocket.current && websocket.current.readyState === WebSocket.OPEN) {
      websocket.current.send(JSON.stringify(message));
    }
  };

  return { sendMessage };
};

export default useWebSocket;