import { compose } from 'recompose';
import Input from '../../components/Input';
import WithValidation from '../../logicalWrappers/textValueValidated';
import WithValueUpdate from '../../logicalWrappers/textValueUpdateHandlers';

export default compose(WithValidation, WithValueUpdate)(Input);
