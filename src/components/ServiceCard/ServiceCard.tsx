import { FC, useState } from 'react'
import { IconBaseProps } from 'react-icons'

import Seta from '../../../public/assets/seta.png'

import { Container, Line } from './styles'

interface CardProps {
  text: string
  icon: React.ComponentType<IconBaseProps>
}

export const ServiceCard: FC<CardProps> = ({ icon: Icon, text }) => {
  const [hovering, isHovering] = useState(false)

  return (
    <Container
      hovering={hovering}
      onMouseOver={() => isHovering(true)}
      onMouseOut={() => isHovering(false)}
    >
      <Icon />
      <div className="wrapper">
        <span>{text}</span>
        <Line />
        <div className="discuss-wrapper">
          <span className="discuss">DISCUSS NOW</span>
          <img className="seta" src={Seta.src} alt="seta" />
        </div>
      </div>
    </Container>
  )
}
