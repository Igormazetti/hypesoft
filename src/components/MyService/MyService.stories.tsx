import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MyService } from '.'

export default {
  title: 'Components/MyService',
  component: MyService,
} as ComponentMeta<typeof MyService>

export const Primary: ComponentStory<typeof MyService> = () => <MyService />
