import React, { Component } from 'react';
import CheckoutSummery from '../../containers/order/CheckoutSummery/checkoutSummery';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state={
        ingredient: null,
        price :0
          
    }
    componentWillMount(){
        const query =new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price =0;
        for(let param of query.entries()){
            if(param[0]==='Price '){
                price =param[1];
            }else {
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({ingredient : ingredients ,totalPrice : price},()=>console.log(this.state));
    }

    CheckOutCancledHandler=()=>{
        this.props.history.goBack();
    }

    CheckOutContinuedHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return(
            <div>
                <CheckoutSummery ingredient={this.state.ingredient}
                CheckOutCancled={this.CheckOutCancledHandler}
                CheckoutContinued={this.CheckOutContinuedHandler}
                />
            <Route path={this.props.match.path + '/contact-data'} 
            render={(props) => (
            <ContactData ingredient={this.state.ingredient}  price = {this.state.totalPrice} {...props}/>)}
            />
            </div>
        )
    }
}
export default Checkout;