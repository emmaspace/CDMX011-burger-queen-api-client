/* eslint-disable no-restricted-globals */
import React, { useState, Fragment } from "react";
import "./Styles/Orders.scss";
import "./Styles/Item.scss";

export default function OrderItem({ order, cuisine }) {

  const orderStatus = order.status;
  const [initialStatus, setInitialStatus] = useState(orderStatus);

  const changeStatus = () => {
    const ready = confirm("¿Está lista la órden?");
    if(ready === true/* order.status === "pending" */) {
      setInitialStatus("Finalizado")/* confirm("¿Está lista la órden?") */
      console.log(initialStatus)
    } else {
      console.log("a ver")
    }
  }

  return (
    <div className="order__container">
      {OrderItem && (
        <Fragment>
          <div className="order__info">
            <p># {order.id}</p>
            <section className="two__cols__name">
              <p>
                {" "}
                <b>Cliente: </b> {order.client}
              </p>
            </section>
            <section className="two__cols">
              <p>{order.timeIn}</p>
              <p>{order.date}</p>
            </section>
            {order.orderProduct.map((product) => (
              <p>
                {product.name && product.name === "Sandwich de jamón y queso"
                  ? "Sandwich j. c/queso"
                  : product.name}{" "}
                <span>x{product.amount}</span>
              </p>
            ))}
          </div>
        </Fragment>
      )}
      <section className="product__info">
        {order.status === "pending" ? (
          <button
            onClick={() => {
              changeStatus(order);
            }}
          >
            <h2>Pendiente</h2>
          </button>
        ) : (
          <button
            onClick={() => {
              changeStatus(order);
            }}
          >
            <h2>Yastambres</h2>
          </button>
        )}
      </section>
    </div>
  );
}