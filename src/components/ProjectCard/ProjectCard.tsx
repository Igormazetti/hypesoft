import { FC } from 'react'

import { BsArrowRight } from 'react-icons/bs'

import { Container } from './styles'

interface ProjectCardProps {
  nome: string
  imgpath: string
  link: string
}

export const ProjectCard: FC<ProjectCardProps> = ({ nome, imgpath, link }) => (
  <Container>
    <img className="principalimg" src={imgpath} alt="foto" />
    <p>{nome}</p>
    <div className="discuss-wrapper">
      <a target="_blank" href={link} className="discuss" rel="noreferrer">
        VIEW PROJECT
      </a>
      <BsArrowRight />
    </div>
  </Container>
)
