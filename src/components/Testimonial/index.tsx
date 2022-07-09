import React, { useState } from "react";
import { Container, TitleWrapper, TestimonialWrapper } from "./styles";
import PinkLine from "../PinkLine";
import Seta from "../Seta";
import data from "./testimonialdata";
import Quote from "../../assets/Quote.png";
import Image from "next/image";

const Testimonial: React.FC = () => {
  const [speaker, setSpeaker] = useState(data[0]);

  return (
    <Container>
      <TitleWrapper>
        <h3>Testimonial</h3>
        <PinkLine />
      </TitleWrapper>
      <TestimonialWrapper>
        <div className="speakers">
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                className="titles"
                onClick={() => setSpeaker(data[index])}
              >
                <div className="titles-content">
                  <div className="avatar" />
                  <div className="names">
                    <h5>{item.nome}</h5>
                    <p>
                      {item.cargo}
                      <span> {item.empresa}</span>
                    </p>
                  </div>
                </div>
                <div className="arrowContainer">
                  {speaker.id === item.id && <Seta />}
                </div>
              </div>
            ))}
        </div>
        <div className="testimonial">
          <div className="rating">
            <Image className="star" src={speaker.rate} alt="rating" />
            <Image src={Quote} alt="quote" />
          </div>
          <p>{speaker.text}</p>
        </div>
      </TestimonialWrapper>
    </Container>
  );
};

export default Testimonial;
