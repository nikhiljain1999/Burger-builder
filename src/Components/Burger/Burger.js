import React from 'react';
import './Burger.css';
import {withRouter} from 'react-router-dom'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger =(props) =>{
    let transformrIngredient =Object.keys(props.ingredient).map(igkey=>{
        return [...Array(props.ingredient[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey +i} type={igkey}/>;
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformrIngredient.length===0){
        transformrIngredient=<p>Please Start Adding Ingredients</p>
    }
    return(
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {transformrIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
}
export default burger;