import { helpHTTP } from "../../helpers/helpHTTP";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import "./Styles/OrderItem.scss";

export default function Orders(addOrders) {
  let [orders, setOrders] = useState();
  //const [time, setTime] = new Date ()


  const api = helpHTTP();

  const url = "http://localhost:5000/orders";

   const temporizador = (order) => {
    const inicio = new Date(order.dateEntry)
     const final = new Date();
     const duration = final.getTime() - inicio.getTime();

     console.log(msToTime(duration));
  }

  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  // console.log(msToTime(300000))
  
  useEffect(() => {
    const endpoint = `${url}`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        setOrders(res);
      } else {
        setOrders(res.err);
      }
    })
  }, []);

  const updateData = (order) => {
    const endpoint = `${url}/${order.id}`;
    const options = {
      headers: { "Content-Type": "application/json" },
      body: { status: "delivered" },
    };
    api.patch(endpoint, options).then((res) => {
      if (res.err) {
        console.log(res.statusText);
      }
    });
    api.get(url).then((res) => {
      if (!res.err) {
        setOrders(res);
      }
      else if (res.err) {
        console.log(res.statusText);
      }
    });
  };

  return (
    <div className="orders">
      {orders &&
        orders.map((order) => (
          <OrderItem key={order.id} order={order} updateData={updateData} temporizador={temporizador}/>
        ))}
    </div>
  );
}
