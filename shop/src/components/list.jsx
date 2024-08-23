import React from "react";
import './list.css'
import { IoCaretBack } from "react-icons/io5";
import Product from './product'

export default function List() {
    return (
        <div id="list" className="absolute top-full flex flex-col gap-7 p-5 bg-black left-0 w-3/4 h-screen transition-all duration-1000">
            <div>
                <button id="btn-back" className="bg-white p-3
                transition-all">
                <IoCaretBack className="rotate-90 w-6 h-6" />
                </button>
            </div>
            <div id="lista-product" className="gap-4 overflow-auto">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}