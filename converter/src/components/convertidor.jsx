import React from "react";
import './convertidor.css';

export default function Convertidor() {



    return (
        <div className='shadow-md rounded-md p-8 flex flex-col items-center justify-center gap-3'>
        <h1 className='text-2xl text-center font-semibold'>Currency Converter</h1>
        <div className='flex flex-wrap gap-4 justify-center'>

            <div id="from" className="flex gap-3">
                <input type='text' className='p-2 outline-none' />
            <select className='p-3 appearance-none outline-none'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='GBP'>GBP</option>
            </select>
            </div>
            
            <div id="to" className="flex gap-3">
                <input type='text' className='p-2 outline-none' />
                <select className='p-3 appearance-none outline-none'>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBP'>GBP</option>
                </select>
            </div>

        </div>
      </div>
    )
}