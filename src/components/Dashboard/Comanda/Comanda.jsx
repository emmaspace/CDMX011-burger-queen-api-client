import "../Styles/Comanda.scss";
// import Breakfast from "./Breakfast";
// import Lunch from "./Lunch";
import ComandaItem from "./ComandaItem";
import React /*{ useState }*/ from "react";
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

  const grossPrice = orderProduct.reduce(
    (x, item) => x + item.price * item.amount, 0)
  console.log(grossPrice);

  const taxPrice = (grossPrice * 0.16)

  const total = (taxPrice + grossPrice)
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
    </div>
  );
}
