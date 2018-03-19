import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

const withValidation = withStateHandlers(props => props, {
  propagateUpdate: (state, props) => (inputName, value) =>
    props.propagateUpdate({
      value,
      inputName,
      isValid: props.validate(value)
    })
});

withValidation.propTypes = {
  validate: PropTypes.func.isRequired
};

export default withValidation;
