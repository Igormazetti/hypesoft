import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Banner } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>

export const Primary: ComponentStory<typeof Banner> = () => <Banner />
