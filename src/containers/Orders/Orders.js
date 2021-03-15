import React, { Component } from 'react';
import Order from '../order/order'
import axios from '../../Components/Layout/Axios-order'
import WithErrorHandler from '../../hoc/WitherrorHandler/witherrorHandler'
import withErrorHandler from '../../hoc/WitherrorHandler/witherrorHandler';
class Orders extends Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
      
        axios.get('orders.json').then(res =>{
            const fetchedorder=[]
            for(let key in res.data){
                fetchedorder.push({...res.data[key],
                id:key
            });
            }

            this.setState({loading:false, orders:fetchedorder})
            console.log(res.data)
        }).catch(err =>{
            this.setState({loading:false})
        });
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order => (
                    <Order key={Order.id}
                    ingredients={order.ingredientAdded}
                    price ={+order.price}
                    />
                ))}
            </div>
        )
    }
}




export default withErrorHandler(Orders,axios);