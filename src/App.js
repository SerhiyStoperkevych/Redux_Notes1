import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';

function App() {
  const value = useSelector(state => state.sample.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux Example</h1>
        <p>Value: {value}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
