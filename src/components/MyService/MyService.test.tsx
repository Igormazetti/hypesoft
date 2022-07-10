import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('testes do componente MyService', () => {
  it('testa se o componente MyService é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('my-services')
    expect(Component).toBeInTheDocument()
  })
})
