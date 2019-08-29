import React from 'react'
import Aux from '../../../hoc/Auxilliary'

const OrderSummary = (props) =>{
	const ingredientSummary = Object.keys(props.ingredients).map((igKey)=>{
		return (
			<li key={igKey}>
				<span style={{textTransform: 'captialize'}}>
					{igKey}
				</span>:
				 	{props.ingredients[igKey]}
			</li>
		)
	})
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A Delicious Burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to Checkout?</p>
		</Aux>
	)
}

export default OrderSummary