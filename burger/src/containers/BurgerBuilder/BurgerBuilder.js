import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'

const INGREDIENTS_PRICE = {
			salad: 15,
			bacon: 40,
			meat: 120,
			cheese: 30
		}

class BurgerBuilder extends Component{

	state = {
		ingredients:{
			salad: 0,
			bacon: 0,
			meat: 0,
			cheese: 0
		},
		totalPrice: 80,
		purchasable: false,
		purchasing: false
	}

	addIngredientHandler = (type)=>{
		const updatedCount = this.state.ingredients[type] + 1
		const updatedIngredients = {...this.state.ingredients}
		updatedIngredients[type] = updatedCount
		const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type]
		this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
		this.updatePurchaseState(updatedIngredients)
	}

	removeIngredientHandler = (type)=>{
		if(this.state.ingredients[type] <= 0){
			return
		}
		const updatedCount = this.state.ingredients[type] - 1
		const updatedIngredients = {...this.state.ingredients}
		updatedIngredients[type] = updatedCount
		const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type]
		this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
		this.updatePurchaseState(updatedIngredients)
	}

	updatePurchaseState = (ingredients)=>{
		const sum= Object.keys(ingredients).map(igKey =>{
			return ingredients[igKey]
		}).reduce((sum, el)=>{
			return sum + el
		},0)
		this.setState({purchasable: sum > 0})
	}

	purchaseHandler= ()=>{
		this.setState({purchasing: true})
	}

	purchaseCancelHandler= ()=>{
		this.setState({purchasing: false})
	}

	purchaseContinueHandler = ()=>{
		alert('You continue')
	}

	render(){
		const disabledInfo = {...this.state.ingredients}
		for (let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return(
			<Aux>
				<Modal 
					show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
					<OrderSummary 
						ingredients={this.state.ingredients} 
						purchaseCanceled={this.purchaseCancelHandler} 
						purchaseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientAdded={this.addIngredientHandler} 
					ingredientRemoved={this.removeIngredientHandler} 
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler}/>
			</Aux>
		)
	}
}

export default BurgerBuilder