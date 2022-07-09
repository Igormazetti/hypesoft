import { FC } from 'react'

import { ContactForm } from '../ContactForm'
import { ContactData } from '../ContactData'

import { Container } from './styles'

export const Contact: FC = () => (
  <Container id="contact">
    <ContactForm />
    <ContactData />
  </Container>
)
