import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('testes do componente ContactForm', () => {
  it('testa se o componente ContactForm é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('contact-form')
    expect(Component).toBeInTheDocument()
  })
})
