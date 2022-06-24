import { FormInputLabel, Input, Group } from './form-input.styles';

export default function FormInput({label, ...others}) {
  return (
    <Group>
      <Input {...others} />
      {label && (
        <FormInputLabel
          shrink={others.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}
