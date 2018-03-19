import { compose, renameProps, withProps, withStateHandlers } from 'recompose';
import * as _ from 'lodash';
import {
  email as emailValidator,
  fullname as fullnameValidator,
  phone as phoneValidator
} from '../../validators';
import Form from '../../components/Form';
import formUpdateHandlers from '../../logicalWrappers/formUpdateHandlers';

const fields = [
  {
    placeholder: 'your name',
    validator: fullnameValidator,
    inputName: 'name'
  },
  {
    placeholder: 'your email',
    validator: emailValidator,
    inputName: 'email'
  },
  {
    placeholder: 'your phone',
    validator: phoneValidator,
    inputName: 'phone'
  }
];

const inputFieldsProps = withProps({
  inputFields: fields
});

const submitHandlers = withStateHandlers(props => props, {
  onSubmit: (state, props) => () => {
    const submittedFields = _.pick(props, _.map(fields, 'inputName'));
    const invalidFields = _.filter(submittedFields, { isValid: false });
    if (_.isEmpty(invalidFields)) {
      props.onSubmit(submittedFields);
    } else {
      alert(`Fields: ${_.map(invalidFields, 'inputName').join()} are invalid`);
    }
  }
});

const RegistrationForm = compose(
  inputFieldsProps,
  formUpdateHandlers,
  renameProps({ updateState: 'propagateUpdate' }),
  submitHandlers
)(Form);

export default RegistrationForm;
