import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FollowMe } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/FollowMe',
  component: FollowMe,
} as ComponentMeta<typeof FollowMe>

export const Primary: ComponentStory<typeof FollowMe> = () => <FollowMe />
