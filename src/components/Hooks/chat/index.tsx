import { useState } from "react";
import ChatRoom from "./ChatRoom.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [flag, setflag] = useState(false)
  return (
    <>
      <div className="mt-12">
        <label >
          Choose the chat room:{" "}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>
        <hr />
        <ChatRoom roomId={roomId} flag={flag} />
        <Button onClick={() => setflag(!flag)}>Change - {flag ? 'true' : 'false'}</Button>
      </div>
    </>
  );
}
