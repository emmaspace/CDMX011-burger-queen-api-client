import "../Styles/Comanda.scss";
// import Breakfast from "./Breakfast";
// import Lunch from "./Lunch";
import ComandaItem from "./ComandaItem";
import React /* , { useState } */ from "react";
// import Header from "./Header";

export default function Comanda({
  orderProduct,
  deleteComanda,
  deleteProduct,
  substract,
  addition
}) {
  return (
    <div className="Comanda__head">
      <section className="Comanda__client">
        <input
          htmlId="client"
          type="text"
          className="client__input"
          placeholder="Nombre del cliente"
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
                deleteProduct={deleteProduct}
                substract={substract}
                addition={addition}
              />
            ))}
            <p> </p>
          </div>
          <div className="commanda__right"></div>
        </div>
      </section>
      <section className="commanda__total">
        <h3>Subtotal</h3>
        <h3>IVA</h3>
        <h2>Total</h2>
      </section>
    </div>
  );
}
