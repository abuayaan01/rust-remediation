import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";

type Product = {
  id: number;
};

function Trap() {
  const [product, setProduct] = useState<Product>({ id: 1 });

  const handleDelete = useCallback(() => {
    console.log(product.id);
  }, [product.id]);

  useEffect(() => {
    setProduct({ id: 999 });
  }, []);

  return (
    <div className="border-2 p-4 mt-8">
      <p>Trap</p>
      <Button className="mt-2" onClick={handleDelete}>
        Print
      </Button>
    </div>
  );
}

export default Trap;
