import React from 'react';

export default function Btn({number}) {

    function putNumber() {
        return number;
    }

    return (
        <button onClick={putNumber}>{number}</button>
    )
}