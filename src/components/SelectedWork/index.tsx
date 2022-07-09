import React from "react";
import PinkLine from "../PinkLine";
import ProjectCard from "../ProjectCard";
import data from "./projectsdata";

import { Container, TitleWrapper, CardsWrapper } from "./styles";

const SelectedWork: React.FC = () => {
  return (
    <Container id="works">
      <TitleWrapper>
        <h3>My Selected Work</h3>
        <PinkLine />
      </TitleWrapper>

      <CardsWrapper>
        {data &&
          data.map((elem, index) => (
            <ProjectCard
              key={index}
              nome={elem.nome}
              imgpath={elem.imgpath.src}
              link={elem.link}
            />
          ))}
      </CardsWrapper>
    </Container>
  );
};

export default SelectedWork;
