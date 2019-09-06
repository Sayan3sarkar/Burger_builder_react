import React from 'react'
import classes from './Order.css'

const Order = (props)=>{

	const ingredients = []

	for(let ingredientName in props.ingredients){
		ingredients.push(
			{
				name: ingredientName,
				quantity: props.ingredients[ingredientName]
			}
		)
	}

	const ingredientOutput = ingredients.map(ig =>{
		return <span
				style={{
						textTransform: 'capitalize',
						border: '1px solid #ccc',
						display: 'inline-block',
						margin: '0 8px',
						padding: '5px'
					}} 
				key={ig.name}>{ig.name}({ig.quantity})</span>
	})
	
	return(
		<div className={classes.Order}>
			<p>Ingredients: {ingredientOutput}</p>
			<p>Net Amount Payable: <strong>INR {props.price.toFixed(2)}</strong></p>
		</div>
	)
}

export default Order