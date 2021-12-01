import React /* , { useState } */ from "react";

export default function CommanderItem({item, deleteProduct}) {
    return (<div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={() => deleteProduct(item)}>x</button>
    </div>)
}