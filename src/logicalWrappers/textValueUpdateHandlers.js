import { withStateHandlers } from 'recompose';

export default withStateHandlers(
  props => ({
    textValue: props.value,
    propagateUpdate: props.propagateUpdate
  }),
  {
    updateText: () => newText => ({ textValue: newText })
  }
);
