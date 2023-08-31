import { render, screen } from '@testing-library/react';
import Modal from '../index';
import Button from '../../Button';
import { store } from '@store/index';
import { Provider } from 'react-redux';


jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (element: HTMLLIElement) => element, // Mock createPortal to render content directly
}));

describe('Modal', () => {

  it('renders Modal content without mistakes', () => {
    render(
      <Provider store={store}>
        <Modal title="test title" button={
          <Button
            text="test"
          />
        }/>
      </Provider>
    );


    const header = screen.getByRole('h3', { name: 'test title' });
    const button = screen.getByRole('button', { name: 'test' });

    setTimeout(() => {
      expect(header).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    }, 100);

  });
});
