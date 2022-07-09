import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Banner } from '.'

export default {
  title: 'Components/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>

export const Primary: ComponentStory<typeof Banner> = () => <Banner />
