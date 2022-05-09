import React, {useContext} from "react";

import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = props => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price}`

  const addToCartHandler = amount => cartContext.addItem({
    id: props.id,
    name: props.name,
    amount,
    price: props.price
  })

  return (
    <li className={classes.meal}>
      <div><h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;