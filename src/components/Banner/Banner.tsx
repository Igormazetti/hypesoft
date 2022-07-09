import { FC } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { CommonButton } from '../CommonBtn'

import { Container } from './styles'

export const Banner: FC = () => (
  <Container>
    <div>
      Got a project in mind? Let's make <br /> something awesome
      <span> together</span>.
    </div>
    <CommonButton width="162px" text="HIRE ME" icon={BsArrowRight} />
  </Container>
)
