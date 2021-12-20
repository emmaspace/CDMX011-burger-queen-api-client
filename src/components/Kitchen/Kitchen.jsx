import { helpHTTP } from "../../helpers/helpHTTP";
import React, { useState, useEffect } from "react";
import KitchenItem from "../Dashboard/OrderItem";
import Header from '../Dashboard/Header/Header';

export default function Kitchen() {
  const [cuisine, setCuisine] = useState();
  const [time, setTime] = new Date();

  const api = helpHTTP();

  const url = "http://localhost:5000/orders";

  const temporizador = (order) => {
    const inicio = order.timeIn
    console.log(inicio)
  }
  const updateData = (order) => {
    const endpoint = `${url}/${order.id}`;
    const options = {
      headers: { "Content-Type": "application/json" },
      body: { status: "done" },
    };
    api.patch(endpoint, options).then((res) => {
      if (res.err) {
        console.log(res.statusText);
      }
    });
    api.get(url).then((res) => {
      if (!res.err) {
        setCuisine(res);
      }
      else if (res.err) {
        console.log(res.statusText);
      }
    });
  };

  useEffect(() => {
    const endpoint = `${url}`;
    api.get(endpoint).then((res) => {
      console.log(res);
      if (!res.err) {
        setCuisine(res);
      } else {
        setCuisine(res.err);
      }
    });
  }, [updateData()]);


  return (
    <div className="orders">
      <Header/>
      {cuisine &&
        cuisine.map((order) => (
          <KitchenItem order={order} key={order.id} updateData={updateData} temporizador={temporizador}/>
        ))}
    </div>
  );
}
