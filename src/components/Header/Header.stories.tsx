import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from '.'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

export const Primary: ComponentStory<typeof Header> = () => <Header />
