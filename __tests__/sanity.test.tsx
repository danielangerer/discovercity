import { render, screen } from '@testing-library/react'

const Dummy = () => <div data-testid="dummy">Hello Dummy</div>

describe('Sanity test', () => {
  it('renders dummy text', () => {
    render(<Dummy />)
    expect(screen.getByTestId('dummy')).toHaveTextContent('Hello Dummy')
  })
})