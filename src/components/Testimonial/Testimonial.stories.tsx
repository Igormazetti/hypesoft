import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Testimonial } from '.'

export default {
  title: 'Components/Testimonial',
  component: Testimonial,
} as ComponentMeta<typeof Testimonial>

export const Primary: ComponentStory<typeof Testimonial> = () => <Testimonial />
