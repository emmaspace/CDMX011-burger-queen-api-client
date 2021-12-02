import React /* , { useState } */ from "react";
import "./CommanderItem.scss"

export default function CommanderItem({ item, deleteProduct }) {
  return (
    <><div className="product__card">
      <p className="product__name">{item.name}</p>
      <button className="product__cardBtn" onClick={() => deleteProduct(item)}>
        x
      </button>
    </div><p className="product__price">${item.price}</p></>
  );
}
