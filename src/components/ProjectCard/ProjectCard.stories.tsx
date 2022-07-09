import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProjectCard } from '.'

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>

export const Primary: ComponentStory<typeof ProjectCard> = () => (
  <ProjectCard nome="Card" imgpath="" link="#" />
)
