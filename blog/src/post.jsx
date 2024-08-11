import React from 'react';

export default function Post({title, content}) {
    return (
        <div className='post'>
            <div content='content'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
            </button>
        </div>
    )
}