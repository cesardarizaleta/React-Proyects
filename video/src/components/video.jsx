import React from 'react'
import './video.css'

export default function Video() {
    return (
        <div id='video-content' className="w-1/2 h-1/2 overflow-hidden bg-black relative rounded-xl">
            <div id="video-controls" className="bg-gray-200 opacity-0
            absolute bottom-0 w-full h-10">
                <div id='bar' className='w-full h-2 bg-blue-400'>

                </div>
            </div>
        </div>
    )
}