import React from "react";
import Youtube from "../../assets/yt.png";
import Google from "../../assets/google.png";
import Adobe from "../../assets/adobe.png";
import Sketch from "../../assets/sketch.png";
import Arrow from "../../assets/arrowlogo.png";
import Image from "next/image";

import { Container } from "./styles";

const CompanyLogo: React.FC = () => {
  return (
    <Container>
      <div className="phrase">
        I worked with <span className="num">289+</span> Companies all over the
        World.
      </div>
      <div className="logos">
        <button type="button" className="logoBtn">
          <Image src={Youtube} alt="youtube logo" />
        </button>
        <button type="button" className="logoBtn">
          <Image src={Google} alt="google logo" />
        </button>
        <button type="button" className="logoBtn">
          <Image src={Adobe} alt="adobe logo" />
        </button>
        <button type="button" className="logoBtn">
          <Image src={Sketch} alt="sketch logo" />
        </button>
        <button type="button" className="logoBtn next">
          <Image src={Arrow} alt="next" />
        </button>
      </div>
    </Container>
  );
};

export default CompanyLogo;
