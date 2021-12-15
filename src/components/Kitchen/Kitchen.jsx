import { helpHTTP } from "../../helpers/helpHTTP";
import React, { useState, useEffect } from "react";
import OrderItem from "../Dashboard/OrderItem";

export default function Kitchen() {
  const [cuisine, setCuisine] = useState();

  const api = helpHTTP();

  const url = "http://localhost:5000/orders";

  useEffect(() => {
    const endpoint = `${url}`;
    api.get(endpoint).then((res) => {
      console.log(res);
      if (Array.isArray(res)) {
        setCuisine(res);
      } else {
        setCuisine(res.err);
      }
    });
  }, []);

  return (
    <div className="orders">
      <p>Kp2</p>
      {cuisine &&
        cuisine.filter((order) => {
          return order.status === "pending" ? (
            <OrderItem order={order} key={order.id} />
          ) : null;
        })}
    </div>
  );
}
