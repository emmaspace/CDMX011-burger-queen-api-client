import "./Styles/Dashboard.scss";
import Breakfast from "./Menu/Breakfast";
import Lunch from "./Menu/Lunch";
import Comanda from "./Comanda/Comanda";
import React, { useState } from "react";
import Header from "./Header/Header";
import Item from "./Menu/Item/Item";
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
            ? { ...exists,  amount: 1 }
            : elem
        )
      );
    } else {
      setOrderProduct([...orderProduct, { ...product, amount: 1 }]);
    }
  };
  const addition = (product) => {
    const exists = orderProduct.find((elem) => elem.id === product.id);
    console.log(exists)
    if(exists) {
      setOrderProduct(orderProduct.map(elem => elem.id === product.id ?
        {...exists, amount: exists.amount + 1} : elem) 
      );
    } else {
      setOrderProduct([...orderProduct, { ...product, amount: 1}])
    }
  }
    

  const substract = (product) => {
    // const exists = orderProduct.find((elem) => elem.id === product.id);
    // return exists.amount >= 1 ? 
    // console.log(exists)
    setOrderProduct(orderProduct.filter((elem) => {
      return elem.amount > 1 && elem.id === product.id ? elem.amount-- : deleteProduct(elem);
    }))
  }

  const deleteComanda = () => {
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
      </section>

      <section /* htmlId="Lunch" */>
        {menu === "lunch" ? (
          <Lunch addProduct={addProduct} />
        ) : null}
      </section>
      <section className="comanda__section" /* htmlId="Comanda" */>
        <Comanda orderProduct={orderProduct} deleteComanda={deleteComanda} deleteProduct={deleteProduct} substract={substract} addition={addition}/>
      </section>
    </div>
  );
}
