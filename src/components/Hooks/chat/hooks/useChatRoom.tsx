import { useEffect, useEffectEvent } from "react";
import { createConnection } from "../chat.ts";

export default function useChatRoom({ serverUrl, roomId, onRecieveMessage }) {
  const fn = useEffectEvent(onRecieveMessage);

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.on("message", fn);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
