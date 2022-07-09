import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ServiceCard } from '.'
import { FiBox } from 'react-icons/fi'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/ServiceCard',
  component: ServiceCard,
} as ComponentMeta<typeof ServiceCard>

export const Primary: ComponentStory<typeof ServiceCard> = () => (
  <ServiceCard text="Service" icon={FiBox} />
)
