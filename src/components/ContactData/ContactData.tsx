import { FC } from 'react'
import Image from 'next/future/image'

import { FollowMe } from '../FollowMe'

import Pin from '../../assets/pin.png'
import EmailIcon from '../../assets/Group.png'
import PhoneIcon from '../../assets/phone.png'

import { Container, DataWrapper } from './styles'

export const ContactData: FC = () => (
  <Container>
    <h3>Get In Touch</h3>
    <DataWrapper>
      <div className="data-content">
        <div className="img-container">
          <Image src={Pin} alt="map pin" />
        </div>
        <div>
          Rua Capitão Procópio Martins de Oliveira, 375, São Paulo - 14500-000,
          Brasil.
        </div>
      </div>
      <div className="data-content">
        <div className="img-container">
          <Image src={EmailIcon} alt="email icon" />
        </div>
        <div>iigormazetti@hotmail.com</div>
      </div>
      <div className="data-content">
        <div className="img-container">
          <Image src={PhoneIcon} alt="phone icon" />
        </div>
        <div>+55 16 99996-5151</div>
      </div>
      <div className="data-links">
        <FollowMe />
      </div>
    </DataWrapper>
  </Container>
)
