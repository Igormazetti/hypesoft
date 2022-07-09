import { FC } from 'react'

import { FollowMe } from '../FollowMe'

import { RiMapPinLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

import { Container, DataWrapper } from './styles'

export const ContactData: FC = () => (
  <Container>
    <h3>Get In Touch</h3>
    <DataWrapper>
      <div className="data-content">
        <div className="img-container">
          <RiMapPinLine size={56} />
        </div>
        <div>
          Rua Capitão Procópio Martins de Oliveira, 375, São Paulo - 14500-000,
          Brasil.
        </div>
      </div>
      <div className="data-content">
        <div className="img-container">
          <AiOutlineMail size={56} />
        </div>
        <div>iigormazetti@hotmail.com</div>
      </div>
      <div className="data-content">
        <div className="img-container">
          <BsTelephone size={56} />
        </div>
        <div>+55 16 99996-5151</div>
      </div>
      <div className="data-links">
        <FollowMe />
      </div>
    </DataWrapper>
  </Container>
)
