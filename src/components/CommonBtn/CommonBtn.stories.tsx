import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommonButton } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/CommonBtn',
  component: CommonButton,
} as ComponentMeta<typeof CommonButton>

export const Primary: ComponentStory<typeof CommonButton> = () => (
  <CommonButton width="162px" text="CommonBtn" />
)