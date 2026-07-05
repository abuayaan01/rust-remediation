import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import useOnlineStatus from "./hooks/useOnlineStatus";

function UnderstandingHooks() {
  const [isOnline] = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }
  return (
    <div className="mt-10 p-4 border-2">
      UnderStanding Hooks
      <div className="mt-3">
        <Button disabled={!isOnline} onClick={handleSaveClick}>
          {isOnline ? "Save progress" : "Reconnecting..."}
        </Button>
      </div>
    </div>
  );
}

export default UnderstandingHooks;
