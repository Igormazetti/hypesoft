import React from "react";
import { Container, TitleWrapper, CardsWrapper } from "./styles";
import PinkLine from "../PinkLine";
import ServiceCard from "../ServiceCard";
import data from "./servicedata";

const MyService: React.FC = () => {
  return (
    <Container id="services">
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
  );
};

export default MyService;
