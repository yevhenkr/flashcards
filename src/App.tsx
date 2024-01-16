import { LoginForm } from '@/components/auth/login-form/login-form'
import { RadioButtons } from '@/components/ui/radio-buttons'
// import { Button } from '@/components/ui/button'
// import RadioButtons from '@/components/ui/radio-buttons/radio-buttons'
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
      {/*<RadioButtons isDisabled={false} />*/}
      <LoginForm />
      <RadioButtons isDisabled={false} variant={'on'} />
    </div>
  )
}
