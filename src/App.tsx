import { LoginForm } from '@/components/auth/login-form/login-form'
import { RadioGroup } from '@/components/ui/radio-group/index'

//
// const linkHref = 'https://www.google.com/'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/*<Button variant={'secondary'}>Primary Button</Button>*/}
      {/*<Button*/}
      {/*  as={'a'}*/}
      {/*  href={linkHref}*/}
      {/*  rel={'noopener nopener'}*/}
      {/*  target={'_blank'}*/}
      {/*  variant={'tertiary'}*/}
      {/*>*/}
      {/*  Primery Button*/}
      {/*</Button>*/}
      {/*<RadioGroup isDisabled={false} />*/}
      <LoginForm />
      <RadioGroup
        option={[
          { isDisabled: false, name: 'Option1', value: 1 },
          { isDisabled: false, name: 'Option2', value: 1 },
        ]}
        variant={'Enable'}
      />
    </div>
  )
}
