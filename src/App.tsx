import "./App.css";
import Counter from "./components/Counter";
import FilterableProductTable from "./components/FilterableProductTable";
import ShoppingCart from "./components/ShoppingCart";
import TodoList from "./components/TodoList";
import Users from "./components/Users";
import RefHelper from "./components/RefHelper";
import { PRODUCTS } from "./dummy";
import UsersList from "./components/users/index";
import { SimpleUserContext } from "./context/SimpleUserContext";
import { UserContextProvider } from "./context/UserContext";
import MiniApp from "./MiniApp";

function App() {
  return (
    <>
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <ShoppingCart /> */}
      {/* <Users /> */}
      {/* <RefHelper /> */}
      {/* <UsersList /> */}
      {/* <SimpleUserContext
        value={{
          name: "ayaan",
          id: 1,
        }}
      >
        <div className="one bg-blue-300">
          <RefHelper />
        </div>
        <div className="two bg-green-200">
          <UsersList />
        </div>
      </SimpleUserContext> */}
      {/* <UserContextProvider>
        <div className="one bg-blue-300">
          <RefHelper />
        </div>
        <div className="two bg-green-200">
          <UsersList />
        </div>
      </UserContextProvider> */}
      <MiniApp />
    </>
  );
}

export default App;
