import { FieldValues, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox/checkbox'
import { UseControllerProps } from '@/utils/types/use-control-types'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'id' | 'onChange' | 'value'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        checked: value,
        id: name,
        onChange,
        ref,
        ...checkboxProps,
      }}
    />
  )
}
