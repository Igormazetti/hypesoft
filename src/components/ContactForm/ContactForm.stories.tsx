import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContactForm } from '.'

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>

export const Primary: ComponentStory<typeof ContactForm> = () => <ContactForm />
