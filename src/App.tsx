import { Button } from '@/components/ui/button'
const linkHref = 'https://www.google.com/'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant={'secondary'}>Primary Button</Button>
      <Button
        as={'a'}
        href={linkHref}
        rel={'noopener nopener'}
        target={'_blank'}
        variant={'tertiary'}
      >
        Primery Button
      </Button>
    </div>
  )
}
