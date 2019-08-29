import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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
		totalPrice: 80
	}

	addIngredientHandler = (type)=>{
		const updatedCount = this.state.ingredients[type] + 1
		const updatedIngredients = {...this.state.ingredients}
		updatedIngredients[type] = updatedCount
		const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type]
		this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
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
	}

	render(){
		const disabledInfo = {...this.state.ingredients}
		for (let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return(
			<Aux>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientAdded={this.addIngredientHandler} 
					ingredientRemoved={this.removeIngredientHandler} 
					disabled={disabledInfo}
					price={this.state.totalPrice}/>
			</Aux>
		)
	}
}

export default BurgerBuilder