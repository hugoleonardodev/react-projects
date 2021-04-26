import { screen, cleanup } from '@testing-library/react';
import About from './About';
import renderWithRouter from '../configs/renderWithRouter';
import userEvent from '@testing-library/user-event';
import carouselInitialState from '../data/carouselInitialState';
import { createMemoryHistory } from 'history';

let newHistory;

beforeAll(() => {
  newHistory = createMemoryHistory();
  newHistory.push('/about');
});

beforeEach(() => {
  localStorage.setItem('blog', JSON.stringify(carouselInitialState));
});

afterEach(() => {
  cleanup();
});

describe('About.js page', () => {
  test('should render', () => {
    renderWithRouter(<About history={newHistory} />, '/about');

    const header = screen.getAllByText(/about/i);
    expect(header.length).toBe(1);
    expect(header[0]).toBeInTheDocument();
  });

  test('should be able to type on texts inputs', () => {
    renderWithRouter(<About history={newHistory} />, '/about');
  });
});
