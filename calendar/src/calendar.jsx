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

    function createDays() {
      let tbody = document.querySelector('tbody');
      if (tbody) {
        for (let i = 0; i < 4; i++) {
          let tr = document.createElement('tr');
          for (let j = 0; j < 7; j++) {
            let td = document.createElement('td');
            td.textContent = j + 1 + i * 7;
            td.onclick = () => {
              if(td.classList.contains('selected')){
                td.classList.remove('selected');
              }
              else{
                td.classList.add('selected');
              }
            }
            tr.appendChild(td);
            tbody.appendChild(tr);
          }
        }
      }
    }

    const [mes, setMes] = useState(new Date().getMonth());

    function nextMonth() {
        if (mes === 11) {
            //Regresar a Enero
            setMes(0);
        } 
        else {
            //Cambiar al siguiente mes
            setMes(mes + 1)
        }
    }

    function backMonth() {
        if (mes === 0) {
            setMes(11);
        } else {
            setMes(mes - 1);
        }
    }

    return (
        <div className='calendario'>
            <nav>
                <button onClick={backMonth}>Previous</button>
                <h2>{meses[mes]}</h2>
                <button onClick={nextMonth}>Next</button>
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
                    <tbody>
                    </tbody>
                </table>
            </main>
        </div>
    );
}