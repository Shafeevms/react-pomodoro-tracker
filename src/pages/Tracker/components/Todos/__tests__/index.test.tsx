import Todos from '../index';
import { render, screen } from '@testing-library/react';


describe('index.tsx', () => {

  it('renders Form', () => {
    // jest.mock('nanoid', () => ({ nanoid: () => 'mocked-id' }));
    // render(<Todos/>);
    // const form = screen.getByRole('form');
    // expect(form).toBeInTheDocument();
    expect(1).toBe(2);
  });

});
// TODO: какая-то хуйня с nanoid - не дает тестировать
