import React from "react";
import './controls.css';
import { RiPencilFill } from "react-icons/ri";
import { PiPaintBucketFill } from "react-icons/pi";
import { FaMarker } from "react-icons/fa";
import { FaCropAlt } from "react-icons/fa";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export default function Controls() {
    return (
        <div id="marco-controls" className="w-20 h-96 rounded-lg gap-6 flex flex-col items-center
        *:cursor-pointer *:transition-all *:duration-700 justify-center">
            <RiPencilFill className="w-8 h-8 control-item rounded-full" />
            <PiPaintBucketFill className="w-8 h-8 control-item rounded-full" />
            <FaMarker className="w-7 h-7 control-item rounded-full" />
            <FaCropAlt className="w-8 h-8 control-item rounded-full" />
            <RiCheckboxBlankFill className="w-8 h-8 control-item rounded-full" />
            <RiCheckboxBlankCircleFill className="w-8 h-8 control-item rounded-full" />
        </div>
    )
}