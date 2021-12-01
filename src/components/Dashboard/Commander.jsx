import "./Dashboard.scss";
// import Breakfast from "./Breakfast";
// import Lunch from "./Lunch";
import CommanderItem from "./CommanderItem"
import React /* , { useState } */ from "react";
// import Header from "./Header";

export default function Commander({ orderProduct, deleteComanda, deleteProduct }) {
  return (
    <div className="commander__head">
      <section className="commander__client">
        <h2>Comanda</h2>
        <label htmlFor="client"> Cliente </label>
        <input
          htmlId="client"
          type="text"
          className="client__input"
          placeholder="Nombre del cliente"
        ></input>
        <button className="btn__delit" onClick={deleteComanda}></button>
      </section>
      <section className="commander__orders">
        {/*   opción 1 de implementación */}
        <div className="commanda__card">
          <div className="commanda__left">
            <p> Producto </p>
            {orderProduct.map((item) => (
              < CommanderItem key={item.id} item={item} deleteProduct={deleteProduct}/>
            ))}
            <p> Precio </p>
          </div>
          <div className="commanda__rigth">
            <button className="c_deleteBtn" onClick={deleteComanda}>
              x
            </button>
          </div>
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
