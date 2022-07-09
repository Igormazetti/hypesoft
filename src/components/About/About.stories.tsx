import { ComponentStory, ComponentMeta } from '@storybook/react'
import { About } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/About',
  component: About,
} as ComponentMeta<typeof About>

export const Primary: ComponentStory<typeof About> = () => <About />
