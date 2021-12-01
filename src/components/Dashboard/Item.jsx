import React, { Fragment } from "react";

export default function Item({ product, addProduct }) {
  return (
    <div onClick={() => addProduct(product)}>
      {product && (
        <Fragment>
          <img src={product.image} alt="Artículo" />
          <div className="product__info">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        </Fragment>
      )}
    </div>
  );
}
