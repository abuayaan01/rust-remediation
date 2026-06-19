import { MiniNavbar } from "./components/MiniNavbar";
import ProductList from "./components/ProductList";
import { CartContextProvider } from "./context/CartContext";

function MiniApp() {
  return (
    <CartContextProvider>
      <div className="p-10">
        <MiniNavbar />
        <ProductList />
      </div>
    </CartContextProvider>
  );
}

export default MiniApp;
