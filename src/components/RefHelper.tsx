import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useContext } from "react";
import { SimpleUserContext } from "@/context/SimpleUserContext";


function RefHelper() {

  const userContext = useContext(SimpleUserContext);
  console.log(userContext)

  const [count, setCount] = useState<number>(0);
  const ref = useRef<number | null>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const timer = useRef<number | null>(null);

  // useEffect(() => {
  //   timer.current = setInterval(() => {
  //     console.log("first");
  //   }, 1000);

  //   return () => {
  //     if (timer.current) {
  //       clearInterval(timer.current);
  //     }
  //   };
  // }, []);

  function increase(): void {
    setCount((p) => p + 1);
  }

  console.log("RENDER", count, ref.current);
  useEffect(() => {
    ref.current = count;
    if (timer.current && count === 3) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Ref Count: {ref.current}</div>

      <Button type="button" onClick={increase}>
        Count+
      </Button>

      <div className="mt-12">
        <Input ref={inputRef} />
        <button
          className="bg-red-600 mt-12"
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          FOCUS ON INPUT
        </button>
      </div>
    </div>
  );
}

export default RefHelper;

// 1. Any state(useState) change would cause the component to re render while (useRef) doesn't causes re render

//2. State change -> re-render -> UI paints -> Effect(useEffect) Runs, here values of ref and state are techniacally same but it is happeing at the end after the ui has been painted, and any change to ref will not cause the re-render so it is not visible in UI so we can use it to hold prev state value;

//3. It can be used to access DOM Elements

//4. It can be used to set timer IDS , using a normal variable would not persist the timer refrence 

//5. It can be used prevent multiple api calls.