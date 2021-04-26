import { screen, cleanup, act } from '@testing-library/react';
import Update from './Update';
import renderWithRouter from '../configs/renderWithRouter';
import userEvent from '@testing-library/user-event';
import carouselInitialState from '../data/carouselInitialState';
import { createMemoryHistory } from 'history';

let newHistory;

beforeAll(() => {
  newHistory = createMemoryHistory();
  newHistory.push('/update/1');
});

beforeEach(() => {
  localStorage.setItem('blog', JSON.stringify(carouselInitialState));
});

afterEach(() => {
  cleanup();
});

describe('Read.js page', () => {
  test('should render', () => {
    renderWithRouter(<Update history={newHistory} />, '/update/1');

    const header = screen.getAllByText(/article/i);
    expect(header.length).toBe(3);
    expect(header[0]).toBeInTheDocument();
  });

  test('should be able to type on texts inputs', () => {
    renderWithRouter(<Update history={newHistory} />, '/update/1');

    const imageInput = screen.getByRole('textbox', { name: /image url/i });

    expect(imageInput).toBeInTheDocument();

    userEvent.type(
      imageInput,
      'https://eskipaper.com/images/landscape-photos-21.jpg',
    );

    expect(imageInput.value).toBe(
      'https://eskipaper.com/images/landscape-photos-21.jpghttps://eskipaper.com/images/landscape-photos-21.jpg',
    );
  });
});
