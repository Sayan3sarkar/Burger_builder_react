import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
        <NavigationItem link="/">About us</NavigationItem>
    </ul>
);

export default navigationItems;