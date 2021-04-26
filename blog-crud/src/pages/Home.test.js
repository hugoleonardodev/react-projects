import { screen, fireEvent, cleanup } from '@testing-library/react';
import Home from './Home';
import renderWithRouter from '../configs/renderWithRouter';
import carouselInitialState from '../data/carouselInitialState';

beforeAll(() => {
  localStorage.clear();
});

beforeEach(() => {
  localStorage.setItem('blog', JSON.stringify(carouselInitialState));
});

afterEach(() => {
  cleanup();
});

describe('Home.js page', () => {
  test('should render with route `/`', () => {
    renderWithRouter(<Home />, '/');
  });

  test('should render carousel with five slides with five articles', () => {
    renderWithRouter(<Home />, '/');

    const articles = screen.getAllByAltText(/article/i);
    expect(articles.length).toBe(5);

    articles.forEach((article) => {
      expect(article).toBeInTheDocument();
    });
  });

  test('should render five floating action buttons', () => {
    renderWithRouter(<Home />, '/');

    const floatingBtns = screen.getAllByTestId(/floating/i);
    expect(floatingBtns.length).toBe(5);

    floatingBtns.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test('should redirect to `/create` when click on `Create` button', () => {
    const { history } = renderWithRouter(<Home />, '/');

    const menuBtn = screen.getByTestId('floating-menu');
    fireEvent.mouseOver(menuBtn);

    const floatingBtns = screen.getAllByTestId(/floating/i);
    floatingBtns.forEach((button) => {
      expect(button).toBeVisible();
    });

    const createBtn = screen.getByTestId('floating-create');
    fireEvent.click(createBtn);

    expect(history.location.pathname).toBe('/create');
  });

  test('should redirect to `/list` when click on `List` button', () => {
    const { history } = renderWithRouter(<Home />, '/');

    const menuBtn = screen.getByTestId('floating-menu');
    fireEvent.mouseOver(menuBtn);

    const floatingBtns = screen.getAllByTestId(/floating/i);
    floatingBtns.forEach((button) => {
      expect(button).toBeVisible();
    });

    const listBtn = screen.getByTestId('floating-list');
    fireEvent.click(listBtn);

    expect(history.location.pathname).toBe('/list');
  });

  test('should redirect to `/favorites` when click on `Favorites` button', () => {
    const { history } = renderWithRouter(<Home />, '/');

    const menuBtn = screen.getByTestId('floating-menu');
    fireEvent.mouseOver(menuBtn);

    const floatingBtns = screen.getAllByTestId(/floating/i);
    floatingBtns.forEach((button) => {
      expect(button).toBeVisible();
    });

    const favoritesBtn = screen.getByTestId('floating-favorites');
    fireEvent.click(favoritesBtn);

    expect(history.location.pathname).toBe('/favorites');
  });

  test('should redirect to `/about` when click on `About` button', () => {
    const { history } = renderWithRouter(<Home />, '/');

    const menuBtn = screen.getByTestId('floating-menu');
    fireEvent.mouseOver(menuBtn);

    const floatingBtns = screen.getAllByTestId(/floating/i);
    floatingBtns.forEach((button) => {
      expect(button).toBeVisible();
    });

    const favoritesBtn = screen.getByTestId('floating-about');
    fireEvent.click(favoritesBtn);

    expect(history.location.pathname).toBe('/about');
  });
});
