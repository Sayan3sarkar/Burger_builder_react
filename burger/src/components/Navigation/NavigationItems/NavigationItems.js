import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const NavigationItems = (props)=>(
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active>Burger Builder</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
		<NavigationItem link="https://github.com/Sayan3sarkar" newTab active>About Us</NavigationItem>
	</ul>
)

export default NavigationItems