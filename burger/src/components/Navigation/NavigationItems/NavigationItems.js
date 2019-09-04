import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
        <NavigationItem link="https://github.com/Sayan3sarkar" target="_blank">About us</NavigationItem>
    </ul>
);

export default navigationItems;