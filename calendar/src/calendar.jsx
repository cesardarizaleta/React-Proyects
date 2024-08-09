import React from 'react'
import './calendar.css'
import { useState, useEffect } from 'react';

export default function Calendar() {

    var meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const cantidad = {
        0: 31,
        1: 28,
        2: 31,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 31,
        8: 30,
        9: 31,
        10: 30,
        11: 31
    };

    const [mes, setMes] = useState(meses[0]);

    const cambio = () => {
        //mes = meses[0] + 1;
    }

    const [tbody, setTbody] = useState(null);

    useEffect(() => {
      const tbodyElement = document.querySelector('tbody');
      setTbody(tbodyElement);
    }, []);
  
    useEffect(() => {
      if (tbody) {
        for (let i = 0; i < 4; i++) {
          let tr = document.createElement('tr');
          for (let j = 0; j < 7; j++) {
            let td = document.createElement('td');
            td.textContent = j + 1 + i * 7;
            tr.appendChild(td);
            tbody.appendChild(tr);
          }
        }
      }
    }, [tbody]);


    return (
        <div className='calendario'>
            <nav>
                <button>Previous</button>
                <h2>{setMes}</h2>
                <button onClick={cambio}>Next</button>
            </nav>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </main>
        </div>
    );
}