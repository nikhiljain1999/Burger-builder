import React, { Component } from 'react';
import { connect } from "react-redux"
import Auxx from '../hoc/Auxx';
import Burger from '../Components/Burger/Burger';
import Buildcontrols from '../Components/Burger/Builldcontrols/Buildcontrols';
import Modal from '../Components/UI/Modal/Modal';
import OrderSummery from '../Components/OrderSummery/Ordersummery'
import axios from '../Components/Layout/Axios-order'
import Spinner from '../Components/UI/Spinner/Spinner'
import withErrorHandler from '../hoc/WitherrorHandler/witherrorHandler';
import *as actionType from "../Store/action"

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    state = {
        pruchasing: false,
        loading: false,
        error: false
    }
    componentDidMount() {
        console.log(this.props)
        // axios.get('https://burger-builder-6ae16-default-rtdb.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredient: response.data }, () => {
        //            // console.log(this.state.ingredient)
        //         })
        //     })
        //     .catch(error=>{
        //         this.setState({error:true});
        //     }
        //     );
    }
    updatePurchaseState(ingredient) {
        const sum = Object.keys(ingredient).map(igkey => {
            return ingredient[igkey];
        })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0
    };
    // addIngredientHandler = (type) => {
    //     const oldcount = this.state.ingredient[type];
    //     const updatecount = oldcount + 1;
    //     const updateIngredients = {
    //         ...this.state.ingredient
    //     }
    //     updateIngredients[type] = updatecount;
    //     const priceAddition = INGREGIRENT_PRICE[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newprice = oldPrice + priceAddition;
    //     this.setState({ totalPrice: newprice, ingredient: updateIngredients })
    //     this.updatePurchaseState(updateIngredients);
    // }
    // removeIngredientHandler = (type) => {
    //     console.log(type);
    //     const oldcount = this.state.ingredient[type];
    //     if (oldcount <= 0) {
    //         return;
    //     }
    //     const updatecount = oldcount - 1;
    //     const updateIngredients = {
    //         ...this.state.ingredient
    //     }
    //     updateIngredients[type] = updatecount;
    //     const priceDeduction = INGREGIRENT_PRICE[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newprice = oldPrice - priceDeduction;
    //     this.setState({ totalPrice: newprice, ingredient: updateIngredients })
    //     this.updatePurchaseState(updateIngredients);
    // }
    purchaseHandler = () => {
        this.setState({ pruchasing: true });
    }
    purchaseCancleHAndler = () => {
        this.setState({ pruchasing: false });
    }
    purchaseContinueHandler = () => {
        //alert('You Continue')
        const queryParams = []
        for (let i in this.state.ingredient) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredient[i]));
        }
        queryParams.push('Price =' + this.state.totalPrice);
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString

        })
    }
    render() {
        const disableInfo = {
            ...this.props.ings
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        console.log("->", disableInfo);

        // if(this.state.loading){
        //     orderSummery= <Spinner />;
        // }
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />
        let orderSummery = null;

        if (this.props.ings) {
            burger = (
                <Auxx>
                    <Burger ingredient={this.props.ings} />
                    <Buildcontrols
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disableInfo}
                        // Price={this.state.totalPrice}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                    />
                </Auxx>
            );
            orderSummery = <OrderSummery
                ingredient={this.props.ings}
                purchaseCancle={this.purchaseCancleHAndler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}
            />
        }
        if (this.state.loading) {
            orderSummery = <Spinner />;
        }
        return (
            <Auxx>
                <Modal show={this.state.pruchasing}
                    modelClosed={this.purchaseCancleHAndler}>
                    {orderSummery}
                </Modal>
                {burger}
            </Auxx>
        )
    }
}

const mapStateToprops = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}
const mapDispatchToprops = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: ingName })
    }
}
export default connect(mapStateToprops, mapDispatchToprops)(withErrorHandler(BurgerBuilder, axios));