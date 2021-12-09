import React, { useEffect, useState } from "react";
import Item from "./Item/Item";
import "../Styles/Menu.scss";

export default function Breakfast({ addProduct }) {
  let [products, setProducts] = useState();
  const getData = async () => {
    const url = "http://localhost:5000/products";
      // "https://my-json-server.typicode.com/emmaspace/CDMX011-burger-queen-api-client/products";
    let fetchData = await fetch(url).then((res) => res.json());
    fetchData = fetchData.filter((product) => product.type === "Comida");
    setProducts(fetchData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="menu">
         {products &&
          products.map((product) => (
          <Item product={product} addProduct={addProduct} />
        ))}
    </div>
  );
}
