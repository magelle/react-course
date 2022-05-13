import React, {useRef, useState} from 'react';

import classes from './Checkout.module.css'


const isEmpty = (value) => value.trim() === '';
const isFiveCHars = (value) => value.length === 5

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  })
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isFiveCHars(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    setFormInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalIsValid,
      city: cityIsValid,
    })

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    });
  };

  let nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : 'invalid'}`;
  let streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : 'invalid'}`;
  let postalCodeControlClases = `${classes.control} ${formInputValidity.postalCode ? '' : 'invalid'}`;
  let cityControlClases = `${classes.control} ${formInputValidity.city ? '' : 'invalid'}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name'/>
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='street'/>
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalCodeControlClases}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalInputRef} type='text' id='postal'/>
        {!formInputValidity.postalCode && <p>Please enter a valid postalCode</p>}
      </div>
      <div className={cityControlClases}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city'/>
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;