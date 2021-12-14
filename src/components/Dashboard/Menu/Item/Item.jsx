import React, { Fragment } from "react";
import "../../Styles/Item.scss"

export default function Item({ product, addProduct }) {
  return (
    <div className="product__container" onClick={() => addProduct(product)}>
      {product && (
        <Fragment>
          <section>
          <img src={product.image} alt="Artículo"/> 
          </section>
          <section className="product__info">
            <h2>{product.name }</h2>
            <p>${product.price}.00</p>
          </section>
        </Fragment>
      )}
    </div>
  );
}
