import { render, screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from '../src/configs/renderWithRouter';

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
