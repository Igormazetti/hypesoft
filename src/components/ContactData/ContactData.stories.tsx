import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContactData } from '.'

export default {
  title: 'Components/ContactData',
  component: ContactData,
} as ComponentMeta<typeof ContactData>

export const Primary: ComponentStory<typeof ContactData> = () => <ContactData />
