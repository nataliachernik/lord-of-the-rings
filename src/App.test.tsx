import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'

test('renders play the game button', () => {
    render(<App/>)
    const buttonElement = screen.getByText(/play the game/i)
    expect(buttonElement).toBeInTheDocument()
})
