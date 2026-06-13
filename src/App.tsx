import "./App.css";
import Counter from "./components/Counter";
import FilterableProductTable from "./components/FilterableProductTable";
import ShoppingCart from "./components/ShoppingCart";
import TodoList from "./components/TodoList";
import Users from "./components/Users";
import { PRODUCTS } from "./dummy";

function App() {
  return (
    <>
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <ShoppingCart /> */}
      <Users />
    </>
  );
}

export default App;
