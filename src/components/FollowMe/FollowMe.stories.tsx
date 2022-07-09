import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FollowMe } from '.'

export default {
  title: 'Components/FollowMe',
  component: FollowMe,
} as ComponentMeta<typeof FollowMe>

export const Primary: ComponentStory<typeof FollowMe> = () => <FollowMe />
