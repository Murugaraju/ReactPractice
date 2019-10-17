import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';


 

const burger =(props)=>{
    let transformedIngredient = Object.keys(props.ingredient).map(ingKey =>{
        return [...Array(props.ingredient[ingKey])].map((_,i)=>{
            console.log(ingKey)
            return <BurgerIngredient key={ingKey+i} type={ingKey}/>
        })
    }).reduce((arr,el)=>arr.concat(el))
    console.log(transformedIngredient)
    if (transformedIngredient.length===0){
        transformedIngredient="Try adding ingredients!"
    }
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredient}

            <BurgerIngredient type="bread-bottom"></BurgerIngredient>


        </div>
    );

}

export default burger;