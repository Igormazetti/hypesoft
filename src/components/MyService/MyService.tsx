import { FC } from 'react'

import { PinkLine } from '../PinkLine'
import { ServiceCard } from '../ServiceCard'

import { data } from './servicedata'

import { Container, TitleWrapper, CardsWrapper } from './styles'

export const MyService: FC = () => (
  <Container id="services" data-testid="my-services">
    <TitleWrapper>
      <h3>My Service</h3>
      <PinkLine />
    </TitleWrapper>
    <CardsWrapper>
      {data &&
        data.map((elem, index) => (
          <ServiceCard key={index} text={elem.phrase} icon={elem.imgPath} />
        ))}
    </CardsWrapper>
  </Container>
)
