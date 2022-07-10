import { FC } from 'react'

import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Contact } from '../components/Contact'
import { CommonButton } from '../components/CommonBtn'
import { FollowMe } from '../components/FollowMe'
import { MyService } from '../components/MyService'
import { Testimonial } from '../components/Testimonial'
import { CompanyLogo } from '../components/CompanyLogo'
import { SelectedWork } from '../components/SelectedWork'

import igor from '../../public/assets/igor.png'
import Hypesoft from '../../public/assets/hypesoft.png'

import {
  Container,
  HomeContainer,
  HomeWrapper,
  Footer,
  PinkHeart,
  Wrapper,
} from './styles'

const Home: FC = () => (
  <Container data-testid="home">
    <Wrapper>
      <div className="purpleBackground" />
      <Header />

      <HomeWrapper>
        <HomeContainer>
          <article id="greetings">
            <p className="greetings-content">
              Hello, I'm Igor, a <span>Software Developer.</span>
            </p>
            <p className="greetings-content" id="description">
              Based in Brazil, i have been studying since 2021 to become a
              Front-End developer, and i'm looking for my first experience as a
              Developer.
            </p>
            <div id="btn-container">
              <CommonButton width="131px" text="HIRE ME" />
              <CommonButton width="170px" text="VIEW WORK" />
            </div>
          </article>

          <FollowMe />
        </HomeContainer>

        <img
          className="igorimg"
          src={igor.src}
          alt="imagem de Igor"
          width={760}
          height={974}
        />
      </HomeWrapper>

      <About />
      <MyService />
      <SelectedWork />
      <CompanyLogo />
      <Banner />
      <Testimonial />
      <Contact />
      <Footer>
        <img src={Hypesoft.src} alt="Hypesoft logo" />
        <p>
          Made with <PinkHeart /> by Igor to <span> Hypesoft</span>
        </p>
      </Footer>
    </Wrapper>
  </Container>
)

export default Home
