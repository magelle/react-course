import React, {Fragment} from "react";
import meals from '../../assets/meals.png'

import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {

  const openCartHandler = () => {
    props.openCart();
  }

  return (<Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
      <img src={meals} alt="A table full of meals"/>
    </div>
  </Fragment>);
};

export default Header;