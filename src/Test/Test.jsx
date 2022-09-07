import React, { useState, useEffect } from 'react';

export default function Test() {
    function handleClick(){
        alert('Hicieron click')

    }


  return <div onClick = {handleClick} style={{border:'3px solid black', margin: '20px' }}>Test</div>;
}
