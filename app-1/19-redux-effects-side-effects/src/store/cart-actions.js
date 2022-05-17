import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch('https://magelle-react-course-default-rtdb.europe-west1.firebasedatabase.app/cart.json')

      if (!response.ok) throw new Error("Could not fetch cart data")

      const data = await response.json()
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(cartActions.replaceCart(data));
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'Fetching cart data failed!'
      }))
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!'
    }));
    const sendRequest = async () => {
      const response = await fetch('https://magelle-react-course-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      if (!response.ok) throw new Error('Sending cart data failed.')

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Send cart data successfully!'
      }));
    }

    try {
      await sendRequest()
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'Sending cart data failed!'
      }))
    }
  }
}
