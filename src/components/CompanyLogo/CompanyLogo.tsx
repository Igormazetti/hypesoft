import { FC } from 'react'
import Image from 'next/future/image'

import Youtube from '../../assets/yt.png'
import Google from '../../assets/google.png'
import Adobe from '../../assets/adobe.png'
import Sketch from '../../assets/sketch.png'
import Arrow from '../../assets/arrowlogo.png'

import { Container } from './styles'

export const CompanyLogo: FC = () => (
  <Container>
    <div className="phrase">
      I worked with <span className="num">289+</span> Companies all over the
      World.
    </div>
    <div className="logos">
      <button type="button" className="logoBtn">
        <img src={Youtube.src} alt="youtube logo" />
      </button>
      <button type="button" className="logoBtn">
        <img src={Google.src} alt="google logo" />
      </button>
      <button type="button" className="logoBtn">
        <img src={Adobe.src} alt="adobe logo" />
      </button>
      <button type="button" className="logoBtn">
        <img src={Sketch.src} alt="sketch logo" />
      </button>
      <button type="button" className="logoBtn next">
        <img src={Arrow.src} alt="next" />
      </button>
    </div>
  </Container>
)
