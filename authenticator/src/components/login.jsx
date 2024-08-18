import React from "react";

export default function Login() {
    return (
        <div id="login-content" className="flex flex-col h-full absolute w-1/2 p-10 items-center justify-center gap-5">
            <h1 className="text-4xl font-bold">Login</h1>
            <form className="flex flex-col gap-3 w-full justify-center items-center">
                <input className="w-3/4 p-2 rounded-md outline-none" type="text" placeholder="Username" />
                <input className="w-3/4 p-2 rounded-md outline-none" type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <button>I forgot my password</button>
            <button>Register</button>
        </div>
    )
}