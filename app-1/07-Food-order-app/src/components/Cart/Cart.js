import React, {useContext} from "react";

import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = props => {
  const cartContext = useContext(CartContext)

  const cartItemRemoveHandler = id => cartContext.removeItem(id)
  const cartItemAddHandler = item => cartContext.addItem(item)

  const cartItems = <ul className={classes["cart-tems"]}>{
    cartContext.items.map(item => <CartItem key={item.id}
                                            name={item.name}
                                            price={item.price}
                                            amount={item.amount}
                                            onAdd={cartItemAddHandler.bind(null, item)}
                                            onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />)}</ul>;

  const hasItems = cartContext.items.length > 0
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  return (<Modal onClose={props.onClose}>
    <div>{cartItems}</div>
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems && <button className={classes.button}>Order</button>}
    </div>
  </Modal>);
};

export default Cart;