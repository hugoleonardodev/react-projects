import { screen } from '@testing-library/react';
import Home from './Home';
import renderWithRouter from '../configs/renderWithRouter';

test('renders learn react link', () => {
  renderWithRouter(<Home />, '/');
  const linkElement = screen.getByAltText(/1/i);
  expect(linkElement).toBeInTheDocument();
});
