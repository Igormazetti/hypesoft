import { ComponentStory, ComponentMeta } from '@storybook/react'
import { About } from '.'

export default {
  title: 'Components/About',
  component: About,
} as ComponentMeta<typeof About>

export const Primary: ComponentStory<typeof About> = () => <About />
