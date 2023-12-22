import { UseControllerProps, useController } from 'react-hook-form'

import { CheckBox, CheckBoxProps } from '@/components/ui/checkBox'

export type ControlledCheckboxProps = UseControllerProps<any> &
  Omit<CheckBoxProps, 'id' | 'onChange' | 'value'>

export const ControlledCheckbox = ({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <CheckBox
      {...{
        checked: value,
        id: name,
        onChange,
        ...checkboxProps,
      }}
    />
  )
}
