import { render, screen } from '@testing-library/react'

const Dummy = () => <div data-testid="dummy">Hello Dummy</div>

test('renders dummy', () => {
  render(<Dummy />)
  expect(screen.getByTestId('dummy')).toHaveTextContent('Hello Dummy')
})