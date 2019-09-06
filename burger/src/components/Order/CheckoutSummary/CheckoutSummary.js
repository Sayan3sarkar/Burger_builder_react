import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const CheckoutSummary = (props)=>{
	return(
		<div className={classes.CheckoutSummary}>
			<h1>Hope you enjoy your burger</h1>
			<div style={{width: '100%', margin:'auto'}}>
				<Burger ingredients={props.ingredients}/>
			</div>
			<Button 
				btnType="Success"
				clicked={props.checkoutContinued}>PROCEED TO PAYMENT</Button>
			<Button 
				btnType="Danger"
				clicked={props.checkoutCancelled}>CANCEL</Button>
		</div>
	)
}

export default CheckoutSummary