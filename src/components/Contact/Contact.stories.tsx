import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Contact } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Contact',
  component: Contact,
} as ComponentMeta<typeof Contact>

export const Primary: ComponentStory<typeof Contact> = () => <Contact />
