import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx' ;
import Button from '../UI/Button/Button' 
class OrderSummery  extends Component{
    componentWillUpdate(){
        console.log("Hi")
    }
    render(){
        const ingredientSummery =Object.keys(this.props.ingredient).map(igKey=>
            {
        <li key={igKey}>
            <span
             style={{textTransform:'capitalize'}}>{igKey}
            </span>:{this.props.ingredient[igKey]}
        </li>
        });
        return (<Auxx>
            <h3>
                Your Order
            </h3>
            <p>
                Your Delicious Burger with the following ingredients :
            </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>
                <strong>
                    Total Price :{this.props.price}
                </strong> 
            </p>
            <p>
                Continue to Checkout?
            </p>
            <Button btnType='Danger' clicked={this.props.purchaseCancle}>
                CANCLE
            </Button>
            <Button btnType='Success' clicked={this.props.purchaseContinued}>
                CONTINUE
            </Button>

    </Auxx>);
    }}

export default OrderSummery