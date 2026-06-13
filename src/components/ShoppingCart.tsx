import { useReducer } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ShoppingCart as CartIcon } from "lucide-react";

type Item = {
  id: number;
  category: string;
  name: string;
  price: string;
  stocked: boolean;
};

type Action =
  | {
      type: "ADD_TO_CART";
      payload: Item;
    }
  | { type: "REMOVE_FROM_CART"; id: number };

function reducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, action.payload];
    }
    case "REMOVE_FROM_CART": {
      return state.filter((p) => p.id !== action.id);
    }
    default: {
      return state;
    }
  }
}

function ShoppingCart() {
  const initialState: Item[] = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(product: Item): void {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  function removeFromCart(id: number): void {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  }

  return (
    <>
      <div className="cart">
        <div
          onClick={() => console.log(state)}
          className="p-2 m-2 border-2 w-20 flex justify-around"
        >
          <CartIcon />
          {state.length}
        </div>
      </div>
      <div className="flex flex-wrap gap-10 mx-auto">
        {PURCHASABLE_PRODUCTS.map((prod) => {
          const inCart: boolean = state.some((p) => p.id === prod.id);
          return (
            <Card className="w-100 p-4" key={prod.id}>
              <CardHeader>
                <CardTitle>{prod.name}</CardTitle>
              </CardHeader>
              <CardDescription>
                <CardContent>{prod.category}</CardContent>
                {prod.stocked ? (
                  <CardAction>
                    {inCart ? (
                      <Button onClick={() => removeFromCart(prod.id)}>
                        Remove
                      </Button>
                    ) : (
                      <Button onClick={() => addToCart(prod)}>
                        Add to cart
                      </Button>
                    )}
                  </CardAction>
                ) : (
                  <CardAction>
                    <Button disabled={true}>Out of stock</Button>
                  </CardAction>
                )}
              </CardDescription>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default ShoppingCart;

export const PURCHASABLE_PRODUCTS: Item[] = [
  { id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  {
    id: 2,
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Dragonfruit",
  },
  {
    id: 3,
    category: "Fruits",
    price: "$2",
    stocked: false,
    name: "Passionfruit",
  },
  {
    id: 4,
    category: "Vegetables",
    price: "$2",
    stocked: true,
    name: "Spinach",
  },
  {
    id: 5,
    category: "Vegetables",
    price: "$4",
    stocked: false,
    name: "Pumpkin",
  },
];
