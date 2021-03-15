import React from 'react';
import './Buildcontrols.css'
import Buildcontrol from './Buildcontrol/Buildcontrol'
const controls =[
    {label:'Salad',type :'salad'},
    {label:'Bacon',type :'bacon'},
    {label:'Cheese',type :'cheese'},
    {label:'Meat',type :'meat'}
];
const buildControls=(props) =>(

    <div className='Buildcontrols'>
        <p>Current Price :<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(crtl =>(
            <Buildcontrol
             key={crtl.label} 
             label ={crtl.label}
             added={() =>  props.ingredientAdded(crtl.type)}
             removed={()=> props.ingredientRemoved(crtl.type)}
                disabled={props.disabled[crtl.type]}
                />
        ))}
        <button 
        className='OrderButton' 
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>

    </div>
);

export default buildControls;