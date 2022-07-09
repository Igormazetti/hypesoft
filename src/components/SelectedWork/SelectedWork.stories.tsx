import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SelectedWork } from '.'

export default {
  title: 'Components/SelectedWork',
  component: SelectedWork,
} as ComponentMeta<typeof SelectedWork>

export const Primary: ComponentStory<typeof SelectedWork> = () => (
  <SelectedWork />
)
