import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function Breakfast({ addProduct }) {
  let [products, setProducts] = useState();
  const getData = async () => {
    const url =
      "https://my-json-server.typicode.com/emmaspace/CDMX011-burger-queen-api-client/products";
    let fetchData = await fetch(url).then((res) => res.json());
    fetchData = fetchData.filter((product) => product.type === "Comida");
    setProducts(fetchData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
         {products &&
          products.map((product) => (
          <Item product={product} addProduct={addProduct} />
        ))}
    </div>
  );
}
