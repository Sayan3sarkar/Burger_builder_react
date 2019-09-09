import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'

class ContactData extends Component{
	
	state={
		orderForm:{
		            name:{
		            	elementType: 'input',
		            	elementConfig:{
		            		type: 'text',
		            		placeholder: 'Your Name'
		            	},
		            	value: '',
		            	validation: {
		            		required: true
		            	},
		            	valid: false,
		            	touched: false,
		            	errorMessage: ''
		            },
		            street:{
			            elementType: 'input',
			            elementConfig:{
			            	type: 'text',
			            	placeholder: 'Street'
			            },
			            value: '',
						validation: {
							required: true
						},
						valid: false,
						touched: false,
						errorMessage: ''
		            },
		            country:{
		            	elementType: 'input',
		            	elementConfig:{
		            		type: 'text',
		            		placeholder: 'Country'
		            	},
		            	value: '',
		            	validation: {
		            		required: true
		            	},
		            	valid: false,
		            	touched: false,
		            	errorMessage: ''
		            },
		            zip:{
		            	elementType: 'input',
		            	elementConfig:{
		            		type: 'text',
		            		placeholder: 'ZIP Code'
		            	},
		            	value: '',
		            	validation: {
		            		required: true,
		            		minLength: 6,
		            		maxLength: 6,
		            		isNumeric: true
		            	},
		            	valid: false,
		            	touched: false,
		            	errorMessage: ''
		            },
		            email:{
		            	elementType: 'input',
		            	elementConfig:{
		            		type: 'email',
		            		placeholder: 'Your Email ID'
		            	},
		            	value: '',
		            	validation: {
		            		required: true,
		            		isEmail: true
		            	},
		            	valid: false,
		            	touched: false,
		            	errorMessage: ''
		            },
		            delivery:{
		            	elementType: 'select',
		            	elementConfig:{
		            		options: [
		            			{value: 'fastest', displayValue: 'Fastest'},
		            			{value: 'cheapest', displayValue: 'Cheapest'}
		            		]
		            	},
		            	value: 'fastest',
		            	valid: true,
		            	validation: {}
		            }
	            },
		loading: false,
		formIsValid: false
	}

	checkValidity = (value, rules)=>{
		let isValid = true
		if(!rules){
			return true
		}
		if(rules.required){
			isValid = value.trim() !== '' && isValid
		}
		if(rules.minLength){
			isValid = value.length >= rules.minLength && isValid
		}
		if(rules.maxLength){
			isValid = value.length <= rules.maxLength && isValid
		}
		if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
		return isValid
	}

	orderHandler = (event)=>{
		event.preventDefault()
		this.setState({loading: true})
		const formData={}
		for(let formElementID in this.state.orderForm){
			formData[formElementID] = this.state.orderForm[formElementID].value;
		}
        const order={
		            ingredients: this.props.ings,
		            price: this.props.price,
		            orderData: formData
	            }
	    axios.post('/orders.json', order).then(response=> {
	            console.log(response)
	            this.setState({loading: false})
	            this.props.history.push('/')
	            }).catch(error=> {
	                console.log(error)
	                this.setState({loading: false})
	            })
	}

	inputChangedHandler(event, inputIdentifier){
		const updatedOrderForm = {...this.state.orderForm}
		const updatedFormElement = {...updatedOrderForm[inputIdentifier]}
		updatedFormElement.value = event.target.value
		updatedFormElement.touched = true
		updatedFormElement.valid =  this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
		updatedOrderForm[inputIdentifier] = updatedFormElement
		console.log(updatedFormElement)
		let formIsValid = true
		for(let inputID in updatedOrderForm){
			formIsValid = updatedOrderForm[inputID].valid && formIsValid
		}
		this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
	}

	render(){

		const formElementsArray = []
		for(let key in this.state.orderForm){
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key],
			})
		}

		let form =(
			<form onSubmit={this.orderHandler}>
				{formElementsArray.map(formElement=>(
					<Input 
						key = {formElement.id}
						elementType={formElement.config.elementType} 
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate = {formElement.config.validation}
						touched={formElement.config.touched}
						valueType ={formElement.id}
						changed={(event)=>this.inputChangedHandler(event, formElement.id)}/>
				))}
				<Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
			</form>
		)

		if(this.state.loading){
			form = <Spinner />
		}
		return(
			<div className={classes.ContactData}>
				<h4>Enter your contact information:</h4>
				{form}
			</div>
		)
	}
}

const mapStateToProps = state =>{
	return{
		ings: state.ingredients,
		price: state.totalPrice
	}
}

export default connect(mapStateToProps)(ContactData)