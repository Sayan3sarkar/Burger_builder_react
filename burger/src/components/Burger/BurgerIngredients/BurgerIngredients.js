import React from 'react'
import classes from './BurgerIngredients.css'
import PropTypes from 'prop-types'

const BurgerIngredients = (props)=>{
	let ingredient=null
	switch(props.type){

		case('meat'):
			ingredient = <div className={classes.Meat}></div>
			break;

		case('cheese'):
			ingredient = <div className={classes.Cheese}></div>
			break;

		case('salad'):
			ingredient = <div className={classes.Salad}></div>
			break;

		case('bacon'):
			ingredient = <div className={classes.Bacon}></div>
			break;

		case('bread-bottom'):
			ingredient = <div className={classes.BreadBottom}></div>
			break;

		case('bread-top'):
			ingredient = (
				<div className={classes.BreadTop}>
					<div className={classes.SesameSeeds1}></div>
					<div className={classes.SesameSeeds2}></div>
				</div>
			)
			break;

		default:
			ingredient = null
	}
	return ingredient
}

BurgerIngredients.propTypes={
	type: PropTypes.string.isRequried
}

export default BurgerIngredients