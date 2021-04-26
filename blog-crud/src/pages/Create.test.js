import { screen } from '@testing-library/react';
import Create from './Create';
import renderWithRouter from '../configs/renderWithRouter';
import userEvent from '@testing-library/user-event';
import carouselInitialState from '../data/carouselInitialState';

beforeAll(() => {
  localStorage.clear();
});

beforeEach(() => {
  localStorage.setItem('blog', JSON.stringify(carouselInitialState));
});

describe('Create.js page', () => {
  test('should render', () => {
    // await act(async () => {
    renderWithRouter(<Create />, '/create');
    // });
    const header = screen.getAllByText(/create/i);
    expect(header.length).toBe(1);
    expect(header[0]).toBeInTheDocument();
  });

  test('if we are able to type on text inputs', () => {
    renderWithRouter(<Create />, '/create');
    const imageInput = screen.getByRole('textbox', { name: /image url/i });
    expect(imageInput).toBeInTheDocument();
    userEvent.type(
      imageInput,
      'https://eskipaper.com/images/landscape-photos-21.jpg',
    );
    expect(imageInput.value).toBe(
      'https://eskipaper.com/images/landscape-photos-21.jpg',
    );
  });

  test('should create a new article when click on create after type', () => {
    renderWithRouter(<Create />, '/create');
    const imageInput = screen.getByRole('textbox', { name: /image url/i });
    expect(imageInput).toBeInTheDocument();
    userEvent.type(
      imageInput,
      'https://eskipaper.com/images/landscape-photos-21.jpg',
    );
    expect(imageInput.value).toBe(
      'https://eskipaper.com/images/landscape-photos-21.jpg',
    );

    const titleInput = screen.getByRole('textbox', { name: /title/i });
    expect(titleInput).toBeInTheDocument();
    userEvent.type(titleInput, 'How to test software');
    expect(titleInput.value).toBe('How to test software');

    const articleInput = screen.getByRole('textbox', { name: /article/i });
    expect(articleInput).toBeInTheDocument();
    userEvent.type(articleInput, 'Testing software is ery cool! :D');
    expect(articleInput.value).toBe('Testing software is ery cool! :D');

    const createBtn = screen.getByText(/library_add/i);
    expect(createBtn).toBeInTheDocument();
    userEvent.click(createBtn);

    const { articles } = JSON.parse(localStorage.getItem('blog'));
    expect(articles.length).toBe(11);
  });
});
