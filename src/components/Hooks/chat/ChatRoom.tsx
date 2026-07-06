import { useState } from "react";
import useChatRoom from "./hooks/useChatRoom";
import { showNotification } from "./notification";
import { useChatContext } from "../context/ChatContext";

export default function ChatRoom({ roomId, flag }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");
  
  const {chatDetails, handler} = useChatContext();
  // console.log(ctx)

  useChatRoom({
    roomId,
    serverUrl,
    onRecieveMessage(msg) {
      showNotification("New message: " + msg + chatDetails.mssg);
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
      <textarea className="border" onChange={handler}></textarea>
    </>
  );
}
