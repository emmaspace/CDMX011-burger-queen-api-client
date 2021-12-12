import React, { useEffect, useState } from "react";

import {helpHTTP} from "../../helpers/helpHTTP"

 export default function Orders ( addOrders ) {
    let [order, setOrder] = useState();

      let orders = "http://localhost:5000/orders";

      useEffect(() => {
        helpHTTP()
          .get(orders)
          .then((res) => {
            if (!res.err) {
              setOrder(res);
            } else {
              setOrder(null);
            }
          });
      }, [orders]);

    return (
      <div className="orders">
            <p>Estos son los pedidos</p>
      </div>
    );
} 
