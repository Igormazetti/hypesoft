import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SocialLink } from '.'
import { BsLinkedin } from 'react-icons/bs'

export default {
  title: 'Components/SocialLink',
  component: SocialLink,
} as ComponentMeta<typeof SocialLink>

export const Primary: ComponentStory<typeof SocialLink> = () => (
  <SocialLink imgpath={BsLinkedin} link="" />
)
