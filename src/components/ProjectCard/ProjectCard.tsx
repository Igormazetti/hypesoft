import { FC } from 'react'

import Seta from '../../../public/assets/seta.png'

import { Container } from './styles'

interface ProjectCardProps {
  nome: string
  imgpath: string
  link: string
}

export const ProjectCard: FC<ProjectCardProps> = ({ nome, imgpath, link }) => (
  <Container>
    <img
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
      <img className="seta" src={Seta.src} alt="seta" />
    </div>
  </Container>
)
