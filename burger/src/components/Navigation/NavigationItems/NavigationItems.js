import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        { !props.isAuthenticated 
        	? <NavigationItem link="/auth">Authenticate</NavigationItem>
        	: <NavigationItem link="/logout">Logout</NavigationItem>}
        {/*<NavigationItem link="https://github.com/Sayan3sarkar" target="_blank">About us</NavigationItem>*/}
    </ul>
);

export default navigationItems;