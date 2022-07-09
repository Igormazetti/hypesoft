import { FC } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { CommonButton } from '../CommonBtn'

import { Container, Info, InfoBar } from './styles'

export const About: FC = () => (
  <Container id="about">
    <div className="bkg-img">
      <div className="bkgimg" />
      <div className="imgBackground" />
    </div>

    <Info>
      <h4>Front-End Web Developer specialist based in Brazil.</h4>
      <span>
        Have been studying since the beginning of 2021, starting with HTML, CSS
        and JavaScript, joined the Trybe Full-Stack Developer course at november
        of 2021, learning so far React, Redux, Tests, and a few more features
        used in Front-End. Now im learning Back-End using JavaScript with
        NodeJS, Docker, MySql, and im feeling very excited about it!
      </span>

      <InfoBar>
        <div>
          <span className="first-span">01+</span>
          <div>Years of Experience</div>
        </div>
        <div>
          <span className="second-span">28+</span>
          <div>Completed Projects</div>
        </div>
      </InfoBar>

      <CommonButton
        id="about-btn"
        width="162px"
        text="SAY HI"
        icon={BsArrowRight}
      />
    </Info>
  </Container>
)
