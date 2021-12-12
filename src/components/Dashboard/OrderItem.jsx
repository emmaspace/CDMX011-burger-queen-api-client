import React, { Fragment } from "react";

export default function OrderItem({ order }) {
  return (
    <div className="order__container">
      {OrderItem && (
        <Fragment>
          <div className="order__info">
            <h2>{order.client}</h2>
            <p>{order.timeIn}</p>
            <p>{order.date}</p>
            {order.orderProduct.map((product) => (
              <p>
                {product.name} <span>x{product.amount}</span>
              </p>
            ))}
            <p>{order.id}</p>
            <p>{order.status}</p>
          </div>
        </Fragment>
      )}
    </div>
  );
}