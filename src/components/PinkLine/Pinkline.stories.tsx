import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PinkLine } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/PinkLine',
  component: PinkLine,
} as ComponentMeta<typeof PinkLine>

export const Primary: ComponentStory<typeof PinkLine> = () => <PinkLine />
