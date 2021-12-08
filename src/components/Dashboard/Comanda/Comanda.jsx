import "../Styles/Comanda.scss";
// import Breakfast from "./Breakfast";
// import Lunch from "./Lunch";
import ComandaItem from "./ComandaItem";

import React, { useContext, useState } from "react";

import CrudContext from "../../../CRUD/CrudContext";
// import { useContext } from "react";
// import Header from "./Header";

export default function Comanda({
  orderProduct,
  deleteComanda,
  deleteProduct,
  substract,
  addition,
  client,
  setClient,
}) {
  const [today, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const grossPrice = orderProduct.reduce(
    (x, item) => x + item.price * item.amount,
    0
  );
  // console.log(grossPrice);

  const taxPrice = grossPrice * 0.16;

  const total = taxPrice + grossPrice;

  const { createData } = useContext(CrudContext);

  const order = {
    client,
    orderProduct,
    date: today.toLocaleDateString(),
    timeIn: time.toLocaleTimeString(),
    status: "pending",
  };

  const submitOrder = (e) => {
    e.preventDefault();
    // console.log(order);
    if (!order.client || !order.orderProduct) {
      return alert(
        "Por favor escribe el nombre del cliente o agrega productos a la órden"
      );
    } else {
      createData(order);
    }
  };

  return (
    <div className="Comanda__head">
      <section className="Comanda__client">
        <input
          htmlId="client"
          type="text"
          className="client__input"
          placeholder="Nombre del cliente"
          onChange={(e) => setClient(e.target.value)}
          value={client}
        ></input>

        <button className="c_deleteBtn" onClick={deleteComanda}>
          <img
            src="https://i.ibb.co/m5FfTjB/Trash-Can.png"
            alt="deja mi basura empaz"
          />
        </button>
      </section>
      <section className="Comanda__orders">
        <div className="commanda__card">
          <div className="commanda__left">
            <p> </p>
            {orderProduct.map((item) => (
              <ComandaItem
                key={item.id}
                item={item}
                today={today}
                setDate={setDate}
                deleteProduct={deleteProduct}
                substract={substract}
                addition={addition}
                setClient={setClient}
              />
            ))}
          </div>
          <div className="commanda__right"></div>
        </div>
      </section>
      <section className="commanda__total">
        <h3>Subtotal</h3>
        <p>${grossPrice.toFixed(2)}</p>
        <h3>IVA</h3>
        <p>${taxPrice.toFixed(2)}</p>
        <h2>Total</h2>
        <p>${total.toFixed(2)}</p>
      </section>
      <button onClick={submitOrder} className="submitBtn">
        Enviar
      </button>
      <button className="submitBtn">Cancelar</button>
    </div>
  );
}
