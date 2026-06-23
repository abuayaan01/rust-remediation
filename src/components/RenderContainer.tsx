import React, { useCallback, useMemo, useState } from "react";
import { Button } from "./ui/button";
import FilterableProductTable from "./FilterableProductTable";
import { PRODUCTS } from "@/dummy";

type User = {
  name: string;
};

const Child = React.memo(
  ({ user, onClick }: { user: User; onClick: () => void }) => {
    console.log("Child Rendered");

    return (
      <h1>
        Child - {JSON.stringify(user)} {"  "}{" "}
        <button onClick={onClick}>click</button>
      </h1>
    );
  }
);

export default function Parent() {
  const [count, setCount] = useState(0);

  const newProd = useMemo(() => PRODUCTS, []);

  const user: User = useMemo(() => {
    return { name: "Ayaan" };
  }, []);

  console.count("Parent");

  const handleClick = useCallback(() => {
    console.log("CLICKED");
  }, []);

  return (
    <>
      <Button onClick={() => setCount((c) => c + 1)}>Count : {count}</Button>

      <Child user={user} onClick={handleClick} />

      <FilterableProductTable products={newProd} />
    </>
  );
}
