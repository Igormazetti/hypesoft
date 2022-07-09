import React, { useState } from "react";
import { Container, Line } from "./styles";
import { IconBaseProps } from "react-icons";
import Seta from "../../assets/seta.png";
import Image from "next/image";

interface CardProps {
  text: string;
  icon: React.ComponentType<IconBaseProps>;
}

const ServiceCard: React.FC<CardProps> = ({ icon: Icon, text }) => {
  const [hovering, isHovering] = useState(false);
  return (
    <Container
      hovering={hovering}
      onMouseOver={() => isHovering(true)}
      onMouseOut={() => isHovering(false)}
    >
      <Icon />
      <div className="wrapper">
        <span>{text}</span>
        <Line />
        <div className="discuss-wrapper">
          <span className="discuss">DISCUSS NOW</span>
          <Image className="seta" src={Seta} alt="seta" />
        </div>
      </div>
    </Container>
  );
};

export default ServiceCard;
