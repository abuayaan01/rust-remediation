import { ShoppingCart as CartIcon } from "lucide-react";
import React from "react";

function MiniCart() {
  return (
    <div>
      <div className="p-2 m-2 border-2 w-20 flex justify-around">
        <CartIcon />0
      </div>
    </div>
  );
}

export default MiniCart;
