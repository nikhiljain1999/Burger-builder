import BurgerBuilder from './containers/BurgerBuilder'
import React,  { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import Checkout from "./containers/Checkout/Checkout"
import {Route, Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders';
import BurgerIngredient from './Components/Burger/BurgerIngredient/BurgerIngredient';
class App extends Component {
  render(){
  return (
    <div>
      <Layout>
        <Switch>
         <Route path="/checkout" component={Checkout}/>
         <Route path="/orders" component={Orders}/>
         <Route path="/"  exact component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}
}

export default App;
