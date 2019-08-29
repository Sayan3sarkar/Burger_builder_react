import React from 'react'
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = (props)=>{

	let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
		return  [...Array(props.ingredients[igKey])].map( (_, i)=>{
			return <BurgerIngredients type={igKey} key={igKey + i} />
		})
	}).reduce((prev,curr)=>{
		return prev.concat(curr)
	},[])
	if(transformedIngredients.length === 0){
		transformedIngredients = <p>Please start adding ingredients</p>
	}
	console.log(transformedIngredients)
	return(
		<div className={classes.Burger}>
			<BurgerIngredients type="bread-top"/>
			{transformedIngredients}
			<BurgerIngredients type="bread-bottom"/>
		</div>
	)
}

export default Burger