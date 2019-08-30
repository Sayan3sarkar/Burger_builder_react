import React from 'react'
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import Button from '../../UI/Button/Button'

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
			<p><legend>Total Price:</legend><strong>{props.price.toFixed(2)}</strong></p>
			<p>Continue to Checkout?</p>
			<Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
			<Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
		</Aux>
	)
}

export default OrderSummary