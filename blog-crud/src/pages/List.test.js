import { screen, cleanup } from '@testing-library/react';
import List from './List';
import renderWithRouter from '../configs/renderWithRouter';
import userEvent from '@testing-library/user-event';
import carouselInitialState from '../data/carouselInitialState';
import { createMemoryHistory } from 'history';

let newHistory;

beforeAll(() => {
  newHistory = createMemoryHistory();
  newHistory.push('/list');
});

beforeEach(() => {
  localStorage.setItem('blog', JSON.stringify(carouselInitialState));
});

afterEach(() => {
  cleanup();
});

describe('Read.js page', () => {
  test('should render', () => {
    renderWithRouter(<List history={newHistory} />, '/list');

    const header = screen.getAllByText(/article/i);
    expect(header.length).toBe(20);
    expect(header[0]).toBeInTheDocument();
  });

  test('should be able to type on texts inputs', () => {
    renderWithRouter(<List history={newHistory} />, '/list');
  });
});
