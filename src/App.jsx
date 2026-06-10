import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (product) => {
    setCartProducts((currentProducts) => {
      if (currentProducts.includes(product.name)) {
        return currentProducts;
      }

      return [...currentProducts, product.name];
    });
  };

  return (
    <>
      <Header
        activePage={activePage}
        cartQuantity={cartProducts.length}
        onNavigate={setActivePage}
      />
      <Banner />
      <ProductList
        addedProducts={cartProducts}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </>
  );
}

export default App;
