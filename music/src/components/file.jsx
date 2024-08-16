import React from "react";
import '../App.css';

export default function File() {

    function openFile() {
        document.getElementById('file').nextElementSibling.click();
    
        document.getElementById('file').nextElementSibling.addEventListener('change', (e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const audio = document.querySelector('audio');
            audio.src = reader.result;
          }
        })
      }
    
    return (
        <>
        <button onClick={openFile} id='file' className='text-white font-semibold'>Import Song</button>
          <input type='file'></input>
        </>
    )
}