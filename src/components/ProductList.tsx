import { useCartContext } from "@/context/CartContext";
import useCartState from "@/hooks/useCartState";

function ProductList() {
  const { dispatch } = useCartContext();

  return (
    <>
      <div className="w-20 h-20 mb-10 bg-amber-300">
        <button
          onClick={() => {
            dispatch({
              type: "ADD_ITEM",
              payload: {
                id: 1,
                name: "iPhone",
              },
            });
            console.log("first");
          }}
        >
          Add iPhone
        </button>
      </div>

      <div>
        <button
          className="w-20 h-20 bg-amber-300"
          onClick={() =>
            dispatch({
              type: "ADD_ITEM",
              payload: {
                id: 2,
                name: "Samsung",
              },
            })
          }
        >
          Add Samsung
        </button>
      </div>
    </>
  );
}

export default ProductList;
