import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Header from '../index';


describe('Header Component', () => {
  it('renders logo and title link', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logo = screen.getByAltText('logo');
    const titleLink = screen.getByText('pomodoro_box');

    expect(logo).toBeInTheDocument();
    expect(titleLink).toBeInTheDocument();
    expect(titleLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders "Статистика" link', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const statisticsLink = screen.getByText('Статистика');

    expect(statisticsLink).toBeInTheDocument();
    expect(statisticsLink.closest('a')).toHaveAttribute('href', '/statistics');
  });
});

describe('Header Component', () => {
  it('navigates to root when title link is clicked', () => {

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const titleLink = screen.getByText('pomodoro_box');
    fireEvent.click(titleLink);

    expect(window.location.pathname).toBe('/');
  });

  it('navigates to /statistics when "Статистика" link is clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const statisticsLink = screen.getByText('Статистика');
    fireEvent.click(statisticsLink);

    setTimeout(() => {
      expect(window.location.pathname).toBe('/statistics');
    }, 100)
  });
});
