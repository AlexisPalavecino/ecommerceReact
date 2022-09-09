import React, { useState, useEffect } from 'react';
//import { contexto } from '../App';


export default function Test() {

    //const { color, setColor } = useContext(contexto);


    function handleClick(){
        alert('Hicieron click')

    }


  return <div onClick = {handleClick} style={{border:'3px solid black', margin: '20px' }}>Test</div>;
}
