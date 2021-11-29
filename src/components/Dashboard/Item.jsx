import React, { Fragment } from "react";

export default function Item({ product }) {
    return (
        <div>{product&&
            <Fragment>
        <h2>{product.name}</h2>
        <strong>{product.price}</strong>
        </Fragment>
            }
            
        </div>
    );
}