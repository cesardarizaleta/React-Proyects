import React from "react";
import './register.css';

export default function Register() {
    return (
        <div id="register-content" className="flex flex-col h-full right-0 absolute w-1/2 bg-gray-950 p-10 items-center justify-center gap-5">
            <h1 className="text-4xl font-bold text-white">Register</h1>
            <form className="flex flex-col gap-3 w-full justify-center items-center">
                <input className="w-3/4 p-3 rounded-3xl outline-none" type="text" placeholder="Username" />
                <input className="w-3/4 p-3 rounded-3xl outline-none" type="password" placeholder="Password" />
                <button className="text-white border w-3/4 p-3 rounded-3xl" type="submit">Register</button>
            </form>
            <span className="w-1/2 bg-gray-300 opacity-50 h-0.5"></span>
            <button className="text-black rounded-3xl bg-white w-3/4 p-3">Login</button>
        </div>
    )
}