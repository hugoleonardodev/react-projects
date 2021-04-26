import { screen } from '@testing-library/react';
import Read from './Read';
import renderWithRouter from '../configs/renderWithRouter';
import userEvent from '@testing-library/user-event';
import carouselInitialState from '../data/carouselInitialState';
import { createMemoryHistory } from 'history';

let newHistory;

beforeAll(() => {
  localStorage.setItem('blog', JSON.stringify(carouselInitialState));
  newHistory = createMemoryHistory();
  newHistory.push('/read/2');
});

describe('Read.js page', () => {
  test('should render', () => {
    renderWithRouter(<Read history={newHistory} />, '/read/2');
    const header = screen.getAllByText(/article/i);
    expect(header.length).toBe(1);
    expect(header[0]).toBeInTheDocument();
  });
});
