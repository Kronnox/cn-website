import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className="fixed w-full border-b bg-neutral-50 border-neutral-200 z-50"
    >
      <Container>
        <div className="py-2 text-center text-sm">
          HINWEIS: Du benötigst Minecraft Version <b>1.19.2</b> um dich mit dem Server verbinden zu können.
        </div>
      </Container>
    </div>
  )
}

export default Alert
