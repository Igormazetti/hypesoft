import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MyService } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/MyService',
  component: MyService,
} as ComponentMeta<typeof MyService>

export const Primary: ComponentStory<typeof MyService> = () => <MyService />
