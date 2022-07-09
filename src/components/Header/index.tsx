import React from "react";

import { Container } from "./styles";

const Header: React.FC = () => (
  <Container>
    <div>
      <a href="#about">ABOUT</a>
      <a href="#services">SERVICES</a>
      <a href="#works">WORKS</a>
      <a href="#contact">CONTACT</a>
    </div>
  </Container>
);

export default Header;
