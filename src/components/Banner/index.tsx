import React from "react";
import Button from "../CommonBtn";
import { BsArrowRight } from "react-icons/bs";

import { Container } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <div>
        Got a project in mind? Let's make <br /> something awesome
        <span> together</span>.
      </div>
      <Button width="162px" text="HIRE ME" icon={BsArrowRight} />
    </Container>
  );
};

export default Banner;
