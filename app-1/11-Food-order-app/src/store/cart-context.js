import React from "react";

let CartContext = React.createContext({
  itmes:[],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;