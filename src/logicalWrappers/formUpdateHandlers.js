import { withStateHandlers } from 'recompose';

const updateHandlers = withStateHandlers(props => props, {
  updateState: () => (propToUpdate, newValue) => ({
    [propToUpdate]: newValue
  })
});

export default updateHandlers;
