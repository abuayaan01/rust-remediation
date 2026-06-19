import Container from "./components/Container";
import { MiniNavbar } from "./components/MiniNavbar";
import ProductList from "./components/ProductList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { CartContextProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

function MiniApp() {
  return (
    <ThemeProvider>
      <CartContextProvider>
        <Container>
          <ThemeSwitcher />
          <MiniNavbar />
          <ProductList />
        </Container>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default MiniApp;
