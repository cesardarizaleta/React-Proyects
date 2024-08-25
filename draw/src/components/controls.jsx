import React, { useEffect } from "react";
import './controls.css';
import { RiPencilFill } from "react-icons/ri";
import { PiPaintBucketFill } from "react-icons/pi";
import { FaMarker } from "react-icons/fa";
import { FaCropAlt } from "react-icons/fa";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export default function Controls() {

    useEffect(() => {
        const controls = document.querySelectorAll('.control-item');
            controls.forEach(control => {
                control.addEventListener('click', () => {
                    controls.forEach(control => control.classList.remove('active'));
                    control.classList.add('active');
                }
                )
            }
        )
    },[])

    return (
        <div id="marco-controls" className="w-20 h-96 rounded-lg gap-6 flex flex-col items-center
        *:cursor-pointer *:transition-all *:duration-700 justify-center">
            <RiPencilFill className="w-8 h-8 control-item" />
            <PiPaintBucketFill className="w-8 h-8 control-item" />
            <FaMarker className="w-7 h-7 control-item" />
            <FaCropAlt className="w-8 h-8 control-item" />
            <RiCheckboxBlankFill className="w-8 h-8 control-item" />
            <RiCheckboxBlankCircleFill className="w-8 h-8 control-item" />
        </div>
    )
}