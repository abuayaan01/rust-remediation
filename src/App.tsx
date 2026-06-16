import "./App.css";
import Counter from "./components/Counter";
import FilterableProductTable from "./components/FilterableProductTable";
import ShoppingCart from "./components/ShoppingCart";
import TodoList from "./components/TodoList";
import Users from "./components/Users";
import RefHelper from "./components/RefHelper";
import { PRODUCTS } from "./dummy";
import UsersList from "./components/users/index";

function App() {
  return (
    <>
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <ShoppingCart /> */}
      {/* <Users /> */}
      {/* <RefHelper /> */}
      <UsersList />
    </>
  );
}

export default App;
