import Bar from '@statistics/components/Bar';
import { render, screen } from '@testing-library/react';

describe('Bar component', () => {
  it('renders components without errors', () => {
    const action = jest.fn();
    render(<Bar altitude={5} onClick={action}/>);

    const bar = screen.getByTestId('bar');

    expect(bar).toBeInTheDocument();
    expect(bar).toHaveStyle('height: 5%');
    expect(bar).toHaveClass('coral');
  })
});
