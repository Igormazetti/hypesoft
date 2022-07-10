import { FC } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { CommonButton } from '../CommonBtn'
import {
  Ellipse,
  BannerDots,
  PinkDots,
  LittleEllipse,
} from '../../assets/icons'

import { Container } from './styles'

export const Banner: FC = () => (
  <Container data-testid="banner">
    <Ellipse />
    <BannerDots />

    <div>
      Got a project in mind? Let's make <br /> something awesome
      <span> together</span>.
    </div>
    <CommonButton width="162px" text="HIRE ME" icon={BsArrowRight} />

    <LittleEllipse />
    <PinkDots />
  </Container>
)
