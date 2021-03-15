import React from 'react'
import './Buildcontrol.css'

const buildcontrol = (props)=>(
    <div className='Buildcontrol'>
       <div className='Label'>{props.label}</div>
       <button className='Less' onClick={props.removed} disabled={props.disabled}>Less</button>
       <button className='More' onClick={props.added}>More</button> 
    </div>
)

export default buildcontrol