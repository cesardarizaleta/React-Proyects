import React from 'react';
import './comprar.css'
import Product from './product';
import { useEffect } from 'react';

export default function Comprar() {
  
  const products = [
    {name: 'Producto 1', price: 100},
    {name: 'Producto 2', price: 200},
    {name: 'Producto 3', price: 300},
    {name: 'Producto 4', price: 400},
    {name: 'Producto 5', price: 500},
  ];

  function addProduct() {
    alert('Producto agregado al carrito');
    document.querySelector('.compra-rightside ul').innerHTML += '<li>Producto 1</li>';
  }

  useEffect(() => {
    return () => {
      //Por primera vez

    }
  })

  return (
      <div className='compra-global'>
        <h1>Productos</h1>
        <div className='content'>
          <div className='compra-leftside'>
            <Product product={products[0]} addProduct={addProduct}/>
            <Product product={products[1]} addProduct={addProduct}/>
            <Product product={products[2]} addProduct={addProduct}/>
            <Product product={products[3]} addProduct={addProduct}/>
            <Product product={products[4]} addProduct={addProduct}/>
            <Product product={products[0]} addProduct={addProduct}/>
            <Product product={products[1]} addProduct={addProduct}/>
            <Product product={products[2]} addProduct={addProduct}/>
            <Product product={products[3]} addProduct={addProduct}/>
            <Product product={products[4]} addProduct={addProduct}/>
          </div>
          <div className='compra-rightside'>
              <h2>Carrito</h2>
              <ul>

              </ul>
              <button>Comprar</button>
          </div>
          <div className='verification'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#87c655" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
              <h3>Su Compra ha sido realizada con exito</h3>
          </div>
        </div>
      </div>
  );
}