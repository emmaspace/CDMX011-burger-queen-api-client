import React /* , { useState } */ from "react";
import "../Styles/ComandaItem.scss"

export default function ComandaItem({ item, deleteProduct, substract, addition }) {
  return (
    <div className="product__card">
      <p className="product__name" >{item.name}</p>
      <button className="product__cardBtn" onClick={() => deleteProduct(item)}>
        x
      </button>
      <section className="soso">
        <p className="product__price">${item.price}</p>
        <section className="qtyBtns">          
        <button className="calculusBtn" onClick={() => substract(item)}>-</button>
        <span className="siUsaraSassNoHariaEsto">{item.amount}</span>
        <button className="calculusBtn" onClick={() => addition(item)}>+</button>
        </section>

      </section>
    </div>
  );
}
