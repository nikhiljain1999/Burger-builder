import React from 'react';
import Burger from '../../../Components/Burger/Burger'
import Button from "../../../Components/UI/Button/Button"
import './checkoutSummery.css'
const checkoutSummery =(props)=>{
    return(
        <div className="CheckoutSummery">
            <h1>Hope It will Tastes Great</h1>
            <div style={{width: '100%' ,margin:'auto'}}>
                <Burger ingredient={props.ingredient}/>
            </div>
            <div className="btns">
                <Button
                btnType ="Danger"
                clicked={props.CheckOutCancled}>CANCEL</Button>
                <Button 
                btnType ="Success"
                
                clicked={props.CheckoutContinued}>CONTINUE</Button>
            </div>
        </div>
    )
}
export default checkoutSummery;