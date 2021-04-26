import { screen, cleanup } from '@testing-library/react';
import Favorites from './Favorites';
import renderWithRouter from '../configs/renderWithRouter';
import userEvent from '@testing-library/user-event';
import carouselInitialState from '../data/carouselInitialState';
import { createMemoryHistory } from 'history';

let newHistory;

beforeAll(() => {
  newHistory = createMemoryHistory();
  newHistory.push('/favorites');
});

beforeEach(() => {
  localStorage.setItem('blog', JSON.stringify(carouselInitialState));
});

afterEach(() => {
  cleanup();
});

describe('Read.js page', () => {
  test('should render', () => {
    renderWithRouter(<Favorites history={newHistory} />, '/favorites');

    const header = screen.getAllByText(/article/i);
    expect(header.length).toBe(4);
    expect(header[0]).toBeInTheDocument();
  });

  test('should be able to type on texts inputs', () => {
    renderWithRouter(<Favorites history={newHistory} />, '/favorites');
  });
});
