import React from "react";
import { Container } from "./styles";
import Seta from "../../assets/seta.png";
import Image from "next/image";

interface ProjectCardProps {
  nome: string;
  imgpath: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ nome, imgpath, link }) => {
  return (
    <Container>
      <Image
        className="principalimg"
        src={imgpath}
        width="350"
        height="332"
        alt="foto"
      />
      <p>{nome}</p>
      <div className="discuss-wrapper">
        <a target="_blank" href={link} className="discuss" rel="noreferrer">
          VIEW PROJECT
        </a>
        <Image className="seta" src={Seta} alt="seta" />
      </div>
    </Container>
  );
};

export default ProjectCard;
