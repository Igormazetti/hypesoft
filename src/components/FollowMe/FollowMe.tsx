import { FC } from 'react'

import { SocialLink } from '../SocialLink'

import { data } from './socialdata'
import { Container } from './styles'

export const FollowMe: FC = () => (
  <Container>
    <div>
      {data &&
        data.map((item, index) => (
          <SocialLink
            key={index}
            link={item.link}
            imgpath={item.imgPath}
          ></SocialLink>
        ))}
    </div>
  </Container>
)
