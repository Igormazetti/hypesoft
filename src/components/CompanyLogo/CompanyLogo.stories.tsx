import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CompanyLogo } from '.'

export default {
  title: 'Components/CompanyLogo',
  component: CompanyLogo,
} as ComponentMeta<typeof CompanyLogo>

export const Primary: ComponentStory<typeof CompanyLogo> = () => <CompanyLogo />
