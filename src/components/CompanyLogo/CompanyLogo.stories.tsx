import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CompanyLogo } from '.'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/CompanyLogo',
  component: CompanyLogo,
} as ComponentMeta<typeof CompanyLogo>

export const Primary: ComponentStory<typeof CompanyLogo> = () => <CompanyLogo />
