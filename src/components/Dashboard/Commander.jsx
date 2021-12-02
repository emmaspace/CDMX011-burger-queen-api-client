import "./Commander.scss";
// import Breakfast from "./Breakfast";
// import Lunch from "./Lunch";
import CommanderItem from "./CommanderItem";
import React /* , { useState } */ from "react";
// import Header from "./Header";

export default function Commander({
  orderProduct,
  deleteComanda,
  deleteProduct,
}) {
  return (
    <div className="commander__head">
      <section className="commander__client">
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
      <section className="commander__orders">
        <div className="commanda__card">
          <div className="commanda__left">
            <p> </p>
            {orderProduct.map((item) => (
              <CommanderItem
                key={item.id}
                item={item}
                deleteProduct={deleteProduct}
              />
            ))}
            <p> </p>
          </div>
          <div className="commanda__rigth"></div>
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
