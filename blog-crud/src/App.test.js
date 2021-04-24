import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from '../src/configs/renderWithRouter';

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const articles = screen.getAllByAltText(/article/i);

  articles.forEach((article) => {
    expect(article).toBeInTheDocument();
  });
});
