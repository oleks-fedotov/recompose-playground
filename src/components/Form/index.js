import React from 'react';
import * as _ from 'lodash';
import ValidatedInput from '../../WrappedComponents/ValidatedInput';

const Form = ({ onSubmit, inputFields, propagateUpdate }) => (
  <form>
    <p>Registration Form</p>

    {_.map(inputFields, ({ placeholder, validator, inputName }) => (
      <div key={inputName}>
        <ValidatedInput
          placeholder={placeholder}
          propagateUpdate={value => propagateUpdate(inputName, value)}
          validate={validator}
          inputName={inputName}
        />
      </div>
    ))}

    <button type="button" onClick={onSubmit}>
      Submit the form
    </button>
  </form>
);

export default Form;
