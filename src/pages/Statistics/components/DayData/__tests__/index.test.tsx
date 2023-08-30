import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import DayData from '../index';
import { store } from '@store/index';


describe('DayData Component', () => {
  it('renders with workTime data', () => {
    const { getByText } = render(
      <Provider store={store}>
        <DayData />
      </Provider>
    );

    // Assert that the component renders the expected text when workTime is present
    expect(getByText(/Вы работали над задачами в течение/)).toBeInTheDocument();
    expect(getByText(/Нет данных/)).not.toBeInTheDocument(); // Make sure "Нет данных" is not present
  });

  it('renders without workTime data', () => {


    const { getByText } = render(
      <Provider store={store}>
        <DayData />
      </Provider>
    );

    // Assert that the component renders the expected text when workTime is absent
    expect(getByText(/Вы работали над задачами в течение/)).not.toBeInTheDocument(); // Make sure this text is not present
    expect(getByText(/Нет данных/)).toBeInTheDocument();
  });
});
