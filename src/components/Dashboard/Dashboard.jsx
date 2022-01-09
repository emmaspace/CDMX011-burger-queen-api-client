import React, { useState, Fragment } from "react";

import Orders from "./Orders";
import Lunch from "./Menu/Lunch";
import Header from "./Header/Header";
import Comanda from "./Comanda/Comanda";
import Breakfast from "./Menu/Breakfast";
import { useAuthDataContext } from "../../GetUser";

import "./Styles/Dashboard.scss";
import Cookies from "universal-cookie/es6";

export default function Dashboard() {
  const [menu, setMenu] = useState("breakfast");
  const [orderProduct, setOrderProduct] = useState([]);
  const [client, setClient] = useState("");
  const [showOrders, setShowOrders] = useState(false);

  const resetData = () => {
    setClient("");
    setOrderProduct([]);
  };

  const addProduct = (product) => {
    const exists = orderProduct.find((elem) => elem.id === product.id);
    if (exists) {
      setOrderProduct(
        orderProduct.map((elem) =>
          elem.id === product.id ? { ...exists, amount: 1 } : elem
        )
      );
    } else {
      setOrderProduct([...orderProduct, { ...product, amount: 1 }]);
    }
  };
  const addition = (product) => {
    const exists = orderProduct.find((elem) => elem.id === product.id);
    console.log(exists);
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

  const substract = (product) => {
    console.log(product);
    const exists = orderProduct.find((elem) => elem.id === product.id);
    if (exists.amount === 1) {
      deleteProduct(product);
    } else if (exists) {
      setOrderProduct(
        orderProduct.map((elem) =>
          elem.id === product.id
            ? { ...exists, amount: exists.amount - 1 }
            : elem
        )
      );
    }
  };

  const deleteComanda = () => {
    setOrderProduct([]);
    setClient([]);
  };

  const deleteProduct = (product) => {
    const exists = orderProduct.find((elem) => elem.id === product.id);
    if (exists) {
      setOrderProduct(orderProduct.filter((elem) => elem.id !== product.id));
    }
  };
const cookies = new Cookies()
  const  email  = cookies.get("email")
  console.log(email);
  return (
    <div className="dashboard">
      <section htmlID="Header">
        <Header setMenu={setMenu} setShowOrders={setShowOrders} />
      </section>
      <p>Holi {email} </p>
      {showOrders ? null : (
        <Fragment>
          <section>
            {menu === "breakfast" ? (
              <Breakfast addProduct={addProduct} />
            ) : null}
          </section>

          <section>
            {menu === "lunch" ? <Lunch addProduct={addProduct} /> : null}
          </section>
          <section className="comanda__section">
            <Comanda
              client={client}
              setClient={setClient}
              orderProduct={orderProduct}
              deleteComanda={deleteComanda}
              deleteProduct={deleteProduct}
              substract={substract}
              addition={addition}
              resetData={resetData}
            />
          </section>
        </Fragment>
      )}

      <section>{showOrders === true ? <Orders /> : null}</section>
    </div>
  );
}
