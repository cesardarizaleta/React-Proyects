import React from "react";
import './product.css'

export default function Product({product, addProduct}) {
    return (
        <div className="product">
            <h3>{product.name}</h3>
            <h3>${product.price}</h3>
            <button onClick={addProduct}>Agregar al carrito</button>
        </div>
    );
}