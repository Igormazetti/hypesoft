import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommonButton } from '.'

export default {
  title: 'Components/CommonBtn',
  component: CommonButton,
} as ComponentMeta<typeof CommonButton>

export const Primary: ComponentStory<typeof CommonButton> = () => (
  <CommonButton width="162px" text="CommonBtn" />
)
