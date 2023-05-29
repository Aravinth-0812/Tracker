import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

const WS_URL = "ws://localhost:8080";

export function useCustomWebSocket() {
  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onMessage: () => {
      console.log("onMessage recieved");
    },
  });
  const [data, setData] = useState();
  useEffect(() => {
    console.log("lastMessage", lastMessage);
    setData(lastMessage);
  }, [lastMessage, readyState]);
  return {
    sendMessage,
    data,
  };
}
