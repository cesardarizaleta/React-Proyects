import React from "react";
import './list.css'
import { IoCaretBack } from "react-icons/io5";

export default function List() {
    return (
        <div id="list" className="absolute top-full p-5 bg-black left-0 w-3/4 h-screen transition-all duration-1000">
            <button id="btn-back" className="bg-white p-3
            transition-all">
            <IoCaretBack className="rotate-90 w-6 h-6" />
            </button>
        </div>
    )
}