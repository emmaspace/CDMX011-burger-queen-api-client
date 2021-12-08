import React, { useEffect, useState } from "react";
// import { CrudProvider } from "../../CRUD/CrudContext";
// import OrderItem from "./OrderItem";
import {helpHTTP} from "../../helpers/helpHTTP"

 export default function Orders ( addOrders ) {
    let [order, setOrder] = useState();

      // const [db, setDb] = useState(null);
      //const [error, setError] = useState(null);
      // const [loading, setLoading] = useState(null);

      // let api = helpHTTP();
      let orders = "http://localhost:5000/orders";

      useEffect(() => {
        // setLoading(true);
        helpHTTP()
          .get(orders)
          .then((res) => {
            if (!res.err) {
              setOrder(res);
              console.log(order);
              // setError(null);
            } else {
              setOrder(null);
              // setError(res);
            }
            // setLoading(false);
          });
      }, [orders]);
    /* const getData = async () => {
        const url = "https://localhost:5000/products";
        let fetchOrders = await fetch(url).then((res) => { console.log(res); res.json()});
      setOrders(fetchOrders);
    };
    // console.log(orders)

    useEffect(() => {
      getData();
    }, []); */
     /* useEffect(() => {
       // setOrders(true);
       helpHTTP()
         .get(url)
         .then((res) => {
           if (!res.err) {
             setOrders(res);
             console.log(orders);
             // setError(null);
           } else {
             setOrders(null);
             // setError(res);
           }
           // setLoading(false);
         });
     }, []); */
     //console.log(orders)
    return (
      <div className="orders">
        {/* {orders &&
          orders.map((order) => (
            <OrderItem order={order}/>
          ))} */}
            <p>Estos son los pedidos</p>
      </div>
    );
} 
