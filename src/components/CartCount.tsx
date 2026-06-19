import { useCartContext } from "../context/CartContext";

function CartCount() {
  const { state } = useCartContext();
  console.log(state)
  return (
    <h2>
      Cart Items:
      {state.items.length}
    </h2>
  );
}

export default CartCount;
