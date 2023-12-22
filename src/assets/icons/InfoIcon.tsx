import { SVGProps } from 'react'
const SvgInfoIcon = (props: SVGProps<SVGSVGElement> & { colorFill?: string }) => (
  <svg
    fill={'none'}
    height={'100%'}
    viewBox={'0 0 32 32'}
    width={'100%'}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm17.962 24.725 1.806.096v2.531h-7.534v-2.406l1.045-.094c.568-.063.916-.254.916-1.014v-8.801c0-.699-.188-.92-.791-.92l-1.106-.062v-2.626h5.666l-.002 13.296zM15.747 4.648c1.394 0 2.405 1.047 2.405 2.374 0 1.331-1.014 2.313-2.438 2.313-1.454 0-2.404-.982-2.404-2.313 0-1.327.95-2.374 2.437-2.374zM16 32C7.178 32 0 24.822 0 16S7.178 0 16 0c8.82 0 16 7.178 16 16s-7.18 16-16 16zm0-29C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z'
      }
      fill={props.colorFill ? props.colorFill : '#000'}
    />
  </svg>
)

export default SvgInfoIcon
