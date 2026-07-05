import { useState } from "react";
import useChatRoom from "./hooks/useChatRoom";
import { showNotification } from "./notification";

export default function ChatRoom({ roomId, flag }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useChatRoom({
    roomId,
    serverUrl,
    onRecieveMessage(msg) {
      showNotification("New message: " + msg + flag);
    },
  });

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
