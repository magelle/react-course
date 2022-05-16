import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.value);
  const show = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => dispatch({type: 'toggle'});
  const onIncrementHandler = () => dispatch({type: 'increment'})
  const onIncreaseHandler = () => dispatch({type: 'increase', amount: 5})
  const onDecrementHandler = () => dispatch({type: 'decrement'})

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onIncreaseHandler}>Increase by 5</button>
        <button  onClick={onDecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
