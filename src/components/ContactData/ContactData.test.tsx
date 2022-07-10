import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('testes do componente ContactData', () => {
  it('testa se o componente ContactData é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('contact-data')
    expect(Component).toBeInTheDocument()
  })
})
