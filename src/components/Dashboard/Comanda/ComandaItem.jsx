import React from "react";
import "../Styles/ComandaItem.scss"

export default function ComandaItem({ item, deleteProduct, substract, addition }) {
  return (
    <><div className="product__card">
      <p className="product__name" >{item.name}</p>
      <button className="product__cardBtn" onClick={() => deleteProduct(item)}>
        x
      </button>
      <section className="soso">
        <button onClick={() => substract(item)}>-</button>
        <span>{item.amount}</span>
        <button onClick={() => addition(item)}>+</button>
      </section>
    </div><p className="product__price">${item.price}</p></>
  );
}
