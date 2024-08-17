import React from "react";
import './convertidor.css';

export default function Convertidor() {

    function convertir(e) {
        let from = document.getElementById('from').querySelectorAll('select')[0].value;
        let to = document.getElementById('to').querySelectorAll('select')[0].value;
        let cantidad = document.getElementById('from').querySelectorAll('input')[0].value;
        let result = document.getElementById('to').querySelectorAll('input')[0];
        let conversion = 0;

        if(from === 'USD' && to === 'EUR') {
            conversion = cantidad * 0.85;
        } else if(from === 'USD' && to === 'GBP') {
            conversion = cantidad * 0.73;
        } else if(from === 'EUR' && to === 'USD') {
            conversion = cantidad * 1.18;
        } else if(from === 'EUR' && to === 'GBP') {
            conversion = cantidad * 0.86;
        } else if(from === 'GBP' && to === 'USD') {
            conversion = cantidad * 1.37;
        } else if(from === 'GBP' && to === 'EUR') {
            conversion = cantidad * 1.16;
        } else {
            conversion = cantidad;
        }

        result.value = conversion;
    }

    return (
        <div className='shadow-md rounded-md p-8 flex flex-col items-center justify-center gap-3'>
        <h1 className='text-2xl text-center font-semibold'>Currency Converter</h1>
        <div className='flex flex-wrap gap-4 justify-center'>

            <div id="from" className="flex gap-3" onChange={convertir}>
                <input type='text' className='p-2 outline-none' />
            <select className='p-3 appearance-none outline-none'>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='GBP'>GBP</option>
            </select>
            </div>

            <div id="to" className="flex gap-3" onChange={convertir}>
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