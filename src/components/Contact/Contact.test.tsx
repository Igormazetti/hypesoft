import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages'

describe('testes do componente Contact', () => {
  it('testa se o componente Contact é renderizado na página', () => {
    render(<Home />)
    const Component = screen.getByTestId('contact')
    expect(Component).toBeInTheDocument()
  })
  it('testa se o botão de enviar mensagem inicia desabilitado', () => {
    render(<Home />)
    const sendBtn = screen.getByText(/send message/i)
    expect(sendBtn).toBeDisabled()
  })
  it('testa se ao preencher todos os campos o botão fica abilitado', () => {
    render(<Home />)

    const nome = screen.getByPlaceholderText(/full name/i)
    const email = screen.getByPlaceholderText(/email adress/i)
    const subjects = screen.getByPlaceholderText(/subjects/i)
    const message = screen.getByPlaceholderText(/message/i)

    fireEvent.change(nome, { target: { value: 'Igor Mazetti' } })
    fireEvent.change(email, { target: { value: 'iigormazetti@hotmail.com' } })
    fireEvent.change(subjects, { target: { value: 'Contratação' } })
    fireEvent.change(message, {
      target: {
        value: 'Estamos entrando em contato para saber mais do seu trabalho',
      },
    })

    const sendBtn = screen.getByText(/send message/i)
    expect(sendBtn).not.toBeDisabled()
  })
  it('testa se ao clicar no botão os valores dos inputs são resetados', () => {
    render(<Home />)

    const nome = screen.getByPlaceholderText(/full name/i)
    const email = screen.getByPlaceholderText(/email adress/i)
    const subjects = screen.getByPlaceholderText(/subjects/i)
    const message = screen.getByPlaceholderText(/message/i)

    fireEvent.change(nome, { target: { value: 'Igor Mazetti' } })
    fireEvent.change(email, { target: { value: 'iigormazetti@hotmail.com' } })
    fireEvent.change(subjects, { target: { value: 'Contratação' } })
    fireEvent.change(message, {
      target: {
        value: 'Estamos entrando em contato para saber mais do seu trabalho',
      },
    })

    const sendBtn = screen.getByText(/send message/i)
    fireEvent.click(sendBtn)

    expect(nome).toHaveValue('')
    expect(email).toHaveValue('')
    expect(subjects).toHaveValue('')
    expect(message).toHaveValue('')
  })
})
