import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

export const Primary: ComponentStory<typeof Header> = () => <Header />
