import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ServiceCard } from '.'
import { FiBox } from 'react-icons/fi'

export default {
  title: 'Components/ServiceCard',
  component: ServiceCard,
} as ComponentMeta<typeof ServiceCard>

export const Primary: ComponentStory<typeof ServiceCard> = () => (
  <ServiceCard text="Service" icon={FiBox} />
)
