import React, { Fragment } from "react";

export default function OrderItem({ order, addOrder }) {
  return (
    <div className="product__container" onClick={() => addOrder(order)}>
      {OrderItem&& (
        <Fragment>
          <div className="product__info">
            <h2>{order.name}</h2>
            <p>{order.client}</p>
            <p>{order.amount}</p>
          </div>
        </Fragment>
      )}
    </div>
  );
}