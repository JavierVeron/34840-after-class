import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import PromocionApp from "./components/PromocionApp";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos!"} />
      <PromocionApp />
      <Footer />
    </div>
  );
}

export default App;
