import React from 'react';
import PropTypes from 'prop-types';
import { withState, compose, withHandlers } from 'recompose';

const counterState = withState('counter', 'setCounter', 5);
const counterHandlers = withHandlers({
  increment: ({ setCounter }) => () => setCounter(n => n + 1),
  decrement: ({ setCounter }) => () => setCounter(n => n - 1)
});

const ButtonsComponent = ({ counter, increment, decrement }) => (
  <div>
    Count: {counter}
    <button onClick={() => increment(counter)}>Increment</button>
    <button onClick={() => decrement(counter)}>Decrement</button>
  </div>
);

ButtonsComponent.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const counterWrapping = compose(counterState, counterHandlers);

export default counterWrapping(ButtonsComponent);
