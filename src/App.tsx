import { LoginForm } from '@/components/auth/login-form/login-form'

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
    </div>
  )
}
