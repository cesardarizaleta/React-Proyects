import React from "react";
import './login.css';

export default function Login() {
    return (
        <div id="login-content" className="flex flex-col h-full absolute w-1/2 left-0 bg-gray-950 p-10 items-center justify-center gap-5 transition-all duration-1000">
            <h1 className="text-4xl font-bold text-white">Login</h1>
            <form className="flex flex-col gap-3 w-full justify-center items-center">
                <input className="w-3/4 p-3 rounded-3xl outline-none" type="text" placeholder="Username" />
                <input className="w-3/4 p-3 rounded-3xl outline-none" type="password" placeholder="Password" />
                <button className="text-white border w-3/4 p-3 rounded-3xl" type="submit">Login</button>
            </form>
            <button className="text-white underline">I forgot my password</button>
            <button id="btn-change-log" className="text-black rounded-3xl bg-white w-3/4 p-3">Register</button>
        </div>
    )
}