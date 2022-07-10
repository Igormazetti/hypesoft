import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('testes do componente CompanyLogo', () => {
  it('testa se o componente CompanyLogo é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('company-logo')
    expect(Component).toBeInTheDocument()
  })
})
