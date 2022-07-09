import { FC } from 'react'
import Image from 'next/image'

import { CustomLink } from './styles'

interface SocialLinkProps {
  imgpath: string
  link: string
}

export const SocialLink: FC<SocialLinkProps> = ({ link, imgpath }) => (
  <CustomLink target="_blank" href={link}>
    <Image src={imgpath} alt={imgpath} width="56" height="56" />
  </CustomLink>
)
