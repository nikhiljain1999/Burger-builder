import React from 'react'
import './Logo.css'
import burgerLogo from '../../assets/images/burger-logo.png'
const logo=(props)=>(
    <div className='Logo' >
        <img src={burgerLogo} style={{height:props.height}} alt ="MYBURGER"></img>
    </div>
);
export default logo;