import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContactData } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/ContactData',
  component: ContactData,
} as ComponentMeta<typeof ContactData>

export const Primary: ComponentStory<typeof ContactData> = () => <ContactData />
