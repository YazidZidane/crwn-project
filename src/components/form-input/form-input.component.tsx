import { InputHTMLAttributes, FC } from 'react';
import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> =({label, ...others}) => {
  return (
    <Group>
      <Input {...others} />
      {label && (
        <FormInputLabel
          shrink={Boolean(others.value && typeof others.value === 'string' && others.value.length)}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
};

export default FormInput;