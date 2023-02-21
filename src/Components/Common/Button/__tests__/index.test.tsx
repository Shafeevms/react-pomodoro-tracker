import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../index';


describe('Button', () => {
  it('renders button correctly', () => {
    const text = 'Click me';
    render(<Button text={text}/>);
    const button = screen.getByRole('button', { name: text });
    expect(button).toBeInTheDocument();
  });

  it('applies green style if view is not indicated', () => {
    render (<Button text={'click me'}/>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button', 'green');
  });

  it('applies gray style if view is "gray"', () => {
    render (<Button text={'click me'} view={'gray'}/>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button', 'gray');
  });

  it('applies addition class if "className" pointed', () => {
    render(<Button text={'click me'} className={'testClass'}/>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('testClass');
  });

  // todo: не работает этот тест:
  it('calls eventhandler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text={'click me'} onClick={handleClick}/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  })
});
