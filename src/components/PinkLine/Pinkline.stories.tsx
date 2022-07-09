import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PinkLine } from '.'

export default {
  title: 'Components/PinkLine',
  component: PinkLine,
} as ComponentMeta<typeof PinkLine>

export const Primary: ComponentStory<typeof PinkLine> = () => <PinkLine />
