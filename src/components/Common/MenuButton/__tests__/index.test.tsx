import MenuButton from '../index';
import { render, screen } from '@testing-library/react';

describe('MenuButton', () => {
  it('renders components without errors', () => {
    const action = jest.fn();
    render(<MenuButton onClick={action}/>);

    const button = screen.getByRole('button');
    const img = screen.getByRole('img');

    expect(button).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'menubutton.png');
  });
});
