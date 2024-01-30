import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledRadioGroup } from '@/components/ui/controlled/controlled-radio-group/controlled-radio-group'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field'
import { DevTool } from '@hookform/devtools'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { Output, boolean, email, minLength, object, string } from 'valibot'

const loginSchema = object({
  email: string([email()]),
  password: string([minLength(8)]),
  radioGroup: string([email()]),
  rememberMe: boolean(),
})

type FormValues = Output<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '', radioGroup: '', rememberMe: true },
    resolver: valibotResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledTextField
          control={control}
          errorMessage={errors.email?.message}
          label={'email'}
          name={'email'}
        />
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          label={'password'}
          name={'password'}
        />
        <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
        <ControlledRadioGroup
          control={control}
          name={'radioGroup'}
          option={[
            { isDisabled: false, name: 'Option1', value: 1 },
            { isDisabled: false, name: 'Option2', value: 1 },
          ]}
          variant={'Enable'}
        />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
