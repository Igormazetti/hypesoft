import { FC } from 'react'
import { IconType } from 'react-icons'

import { CustomLink } from './styles'

interface SocialLinkProps {
  imgpath: IconType
  link: string
}

export const SocialLink: FC<SocialLinkProps> = ({ link, imgpath: ImgPath }) => (
  <CustomLink target="_blank" href={link}>
    <ImgPath size={20} />
  </CustomLink>
)
