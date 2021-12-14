import React, { Fragment } from "react";
import "./Styles/Orders.scss";
import "./Styles/Item.scss";

export default function OrderItem({ order }) {
  return (
    <div className="order__container">
      {OrderItem && (
        <Fragment>
          <div className="order__info">
          <p># {order.id}</p>
          <section className="two__cols__name">
            <p> <b>Cliente:   </b>   {order.client}</p> 
           </section> 
            <section className="two__cols">
            <p>{order.timeIn}</p>
            <p>{order.date}</p>
            </section>
            {order.orderProduct.map((product) => (
              <p>
                {product.name && product.name === "Sandwich de jamón y queso" ? "Sandwich j. c/queso" : product.name} <span>x{product.amount}</span>
              </p>
            ))}
          </div>
        </Fragment>
      )}
            <section className="product__info">
            <h2>{order.status}</h2>
            </section>
    </div>
  );
}