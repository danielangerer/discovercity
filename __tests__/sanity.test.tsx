import React from 'react'
import { render, screen } from '@testing-library/react'

const Dummy = () => <div data-testid="dummy">Hello Dummy</div>

describe('Sanity test: Test setup works', () => {
  it('renders dummy text', () => {
    render(<Dummy />)
    expect(screen.getByTestId('dummy').textContent).toBe('Hello Dummy')
  })
})