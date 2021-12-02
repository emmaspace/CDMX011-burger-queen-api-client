import "./Dashboard.scss";
// import { useNavigate } from "react-router-dom";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Comanda from "./Commander";
import React, { useState } from "react";
import Header from "./Header";
import Item from "./Item";
//import "../../style.scss";

export default function Dashboard() {
  const [menu, setMenu] = useState("breakfast");
  const [orderProduct, setOrderProduct] = useState([]);
  
  const addProduct = (product) => {
    const exists = orderProduct.find((elem) => elem.id === product.id);
    if (exists) {
      setOrderProduct(
        orderProduct.map((elem) =>
          elem.id === product.id
            ? { ...exists, amount: exists.amount + 1 }
            : elem
        )
      );
    } else {
      setOrderProduct([...orderProduct, { ...product, amount: 1 }]);
    }
  };

  const deleteComanda = (product) => {
    setOrderProduct([]);
  }
  
  const deleteProduct = (product) => {
    const exists = orderProduct.find((elem) => elem.id === product.id);
    if (exists) {
      setOrderProduct(orderProduct.filter((elem) => elem.id !== product.id))
    }
  }

  return (
    <div className="dashboard">
      <section /* htmlID="Header" */>
        {" "}
        <Header setMenu={setMenu} />
      </section>
      <section /* htmlId="Menú" */>
        {menu === "breakfast" ? (
          <Breakfast addProduct={addProduct} />
        ) : null}
        {console.log({ Item }, "que pasa aca")}
      </section>

      <section /* htmlId="Lunch" */>
        {menu === "lunch" ? (
          <Lunch addProduct={addProduct} />
        ) : null}
      </section>
      <section className="comanda__section" /* htmlId="Comanda" */>
        <Comanda orderProduct={orderProduct} deleteComanda={deleteComanda} deleteProduct={deleteProduct}/>
      </section>
    </div>
  );
}
