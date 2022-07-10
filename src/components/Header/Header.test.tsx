import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('testes do componente Header', () => {
  it('testa se o componente Header é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('header')
    expect(Component).toBeInTheDocument()
  })
  it('Testa se ao clicar no link ABOUT redireciona para a seção about', () => {
    render(<Home />)
    const about = screen.getByRole('link', { name: 'ABOUT' })
    userEvent.click(about)
    const text = screen.getByText(/years of experience/i)
    expect(text).toBeInTheDocument()
  })
  it('Testa se ao clicar no link Services redireciona para a seção services', () => {
    render(<Home />)
    const services = screen.getByRole('link', { name: 'SERVICES' })
    userEvent.click(services)
    const title = screen.getByText(/my service/i)
    expect(title).toBeInTheDocument()
  })
})
