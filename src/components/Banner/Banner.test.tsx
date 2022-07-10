import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('testes do componente Banner', () => {
  it('testa se o componente Banner é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('banner')
    expect(Component).toBeInTheDocument()
  })
})
