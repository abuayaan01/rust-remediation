import Container from "./components/Container";
import { MiniNavbar } from "./components/MiniNavbar";
import CatFriends from "./components/MultiRef";
import TravelPlan from "./components/NestedFlattening";
import ProductList from "./components/ProductList";
import CatFriends2 from "./components/RefExplorer/ScrollingIntoRef";
import CatFriends3 from "./components/RefExplorer/SingleScrollerRef";
import RenderContainer from "./components/RenderContainer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Trap from "./components/Trap";
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
          {/* <RenderContainer /> */}
          {/* <TravelPlan /> */}
          {/* <CatFriends /> */}
          {/* <CatFriends2 /> */}
          <CatFriends3 />
          <Trap />
        </Container>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default MiniApp;
