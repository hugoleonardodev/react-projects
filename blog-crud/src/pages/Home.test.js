import { screen } from '@testing-library/react';
import Home from './Home';
import renderWithRouter from '../configs/renderWithRouter';

test('renders learn react link', () => {
  renderWithRouter(<Home />, '/');
  const articles = screen.getAllByAltText(/article/i);

  articles.forEach((article) => {
    expect(article).toBeInTheDocument();
  });
});
