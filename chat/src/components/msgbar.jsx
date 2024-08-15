import React from "react";

export default function MsgBar() {
    return (
        <div className="bg-gray-800 p-4 flex absolute bottom-0 w-full">
            <input type="text" className="p-2 w-full outline-none box-border rounded border border-gray-700" placeholder="Type a message..." />
            <button className="p-2 w-1/4 transition-all hover:w-2/5 bg-white rounded border border-gray-700">Send</button>
        </div>
    )
}