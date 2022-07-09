import { FC } from 'react'
import Image from 'next/image'

import Seta from '../../assets/seta.png'

import { Container } from './styles'

interface ProjectCardProps {
  nome: string
  imgpath: string
  link: string
}

export const ProjectCard: FC<ProjectCardProps> = ({ nome, imgpath, link }) => (
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
)
