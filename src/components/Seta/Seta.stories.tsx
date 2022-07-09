import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Seta } from '.'

export default {
  title: 'Components/Seta',
  component: Seta,
} as ComponentMeta<typeof Seta>

export const Primary: ComponentStory<typeof Seta> = () => <Seta />
