import { FC } from 'react'

import Youtube from '../../../public/assets/yt.png'
import Google from '../../../public/assets/google.png'
import Adobe from '../../../public/assets/adobe.png'
import Sketch from '../../../public/assets/sketch.png'
import Arrow from '../../../public/assets/arrowlogo.png'

import { Container } from './styles'

export const CompanyLogo: FC = () => (
  <Container data-testid="company-logo">
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
