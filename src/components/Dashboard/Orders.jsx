import { helpHTTP } from "../../helpers/helpHTTP";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import  "./Styles/OrderItem.scss";

export default function Orders(addOrders) {
  let [orders, setOrders] = useState();

  const api = helpHTTP();

  const url = "http://localhost:5000/orders";

  useEffect(() => {
    const endpoint = `${url}`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        setOrders(res);
      } else {
        setOrders(res.err);
      }
    });
  }, []);

  return (
    <div className="orders">
      {orders && orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}
