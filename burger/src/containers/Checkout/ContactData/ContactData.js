import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component{
	
	state={
		name: '',
		email: '',
		address:{
			street: '',
			zipCode: ''
		},
		loading: false
	}

	orderHandler = (event)=>{
		event.preventDefault()
		this.setState({loading: true})
        const order={
	            ingredients: this.props.ingredients,
	            price: this.props.price,
	            customer:{
	                name: 'Sayan',
	                address:{
	                        street: 'xyz',
	                        country: 'India',
	                        zip: '987654321'
	                    },
	                email:'abc@xyz.com'
	                },
	            delivery: 'fastest'
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

	render(){
		let form =(
			<form>
				<input type="text" name="name" placeholder="Your Name" />
				<input type="email" name="email" placeholder="Your Email ID" />
				<input type="text" name="street" placeholder="Street" />
				<input type="text" name="zipCode" placeholder="ZIP Code" />
				<Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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

export default ContactData