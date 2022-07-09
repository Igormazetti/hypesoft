import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SelectedWork } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/SelectedWork',
  component: SelectedWork,
} as ComponentMeta<typeof SelectedWork>

export const Primary: ComponentStory<typeof SelectedWork> = () => (
  <SelectedWork />
)
