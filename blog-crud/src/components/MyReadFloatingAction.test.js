import { screen, cleanup, act, fireEvent } from '@testing-library/react';
import MyReadFloatingActionButtons from './MyReadFloatingActionButtons';
import renderWithRouter from '../configs/renderWithRouter';
import userEvent from '@testing-library/user-event';
import carouselInitialState from '../data/carouselInitialState';
import { createMemoryHistory } from 'history';
import M from 'materialize-css';

let newHistory;

beforeAll(() => {
  newHistory = createMemoryHistory();
  newHistory.push('/read/1');
});

beforeEach(() => {
  localStorage.setItem('blog', JSON.stringify(carouselInitialState));
  jest.mock('materialize-css');
});

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

// const { toast } = M;

// const myMock = jest.fn();

const mokTost = {
  html: 'Successfuly added to favorites!',
  classes: 'round',
};

// const mockedToast = myMock.mockImplementation(toast);

const mockedExchange = jest.spyOn(M, 'toast').mockImplementation(() => mokTost);

describe('MyReadFloatingActionButtons.js component', () => {
  test('should throw a toast when clicked on', () => {
    renderWithRouter(
      <MyReadFloatingActionButtons history={newHistory} />,
      '/read/1',
    );

    const bookmark = screen.getByTestId('read-bookmark');

    expect(bookmark).toBeInTheDocument();

    fireEvent.click(bookmark);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledWith(mokTost);
    expect(mockedExchange).toBeCalledTimes(1);
  });
});
