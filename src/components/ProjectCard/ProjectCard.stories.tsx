import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProjectCard } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>

export const Primary: ComponentStory<typeof ProjectCard> = () => (
  <ProjectCard nome="Card" imgpath="" link="#" />
)
