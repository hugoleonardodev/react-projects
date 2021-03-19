import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import renderWithRouter from '../configs/renderWithRouter';
import App from '../App';
import { login } from '../constants/index';

let container = null;
beforeEach(() => {
  // DOM as render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Clear
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('1) Login page for user email and password with button.', () => {
  it('route to this page must be \'/\'.', () => {
    act(() => {
      const { history } = renderWithRouter(<App />);
      expect(history.location.pathname).toBe('/');
    });
  });
  it('should render when the app starts.', () => {
    act(() => {
      const { getByTestId } = renderWithRouter(<App />);
      const emailInput = getByTestId(login.DATA_TEST_ID_EMAIL);
      const passwordInput = getByTestId(login.DATA_TEST_ID_PASSWORD);

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });
  it('should render a button with text \'Entrar\'.', () => {
    act(() => {
      const { getByTestId } = renderWithRouter(<App />);
      const loginButton = getByTestId(login.DATA_TEST_ID_LOGING_BTN);
      expect(loginButton).toBeInTheDocument();
    });
  });
  it('should makes the email, password, and button fields validation.', () => {
    // act(() => { wraps does not work well with userEvents
    const { getByTestId } = renderWithRouter(<App />);

    const loginButton = getByTestId(login.DATA_TEST_ID_LOGING_BTN);
    expect(loginButton).toBeDisabled();

    const emailInput = getByTestId(login.DATA_TEST_ID_EMAIL);
    const passwordInput = getByTestId(login.DATA_TEST_ID_PASSWORD);

    userEvent.type(emailInput, 'email');
    userEvent.type(passwordInput, login.VALID_PASSWORD);
    expect(loginButton).toBeDisabled();

    userEvent.type(emailInput, 'email@com@');
    userEvent.type(passwordInput, login.VALID_PASSWORD);
    expect(loginButton).toBeDisabled();

    userEvent.type(emailInput, 'emailcom@');
    userEvent.type(passwordInput, login.VALID_PASSWORD);
    expect(loginButton).toBeDisabled();

    userEvent.type(emailInput, login.VALID_EMAIL);
    userEvent.type(passwordInput, '23456');
    expect(loginButton).toBeDisabled();

    userEvent.type(emailInput, 'alguem@email.');
    userEvent.type(passwordInput, login.VALID_PASSWORD);
    expect(loginButton).toBeDisabled();

    userEvent.type(emailInput, login.VALID_EMAIL);
    userEvent.type(passwordInput, login.VALID_PASSWORD);
    expect(loginButton).toBeEnabled();
    // });
  });
  it('should save the email on localStorage `user: { email: email-da-pessoa }`', () => {
    // act(() => {
    const { getByTestId } = renderWithRouter(<App />);
    const emailInput = getByTestId(login.DATA_TEST_ID_EMAIL);
    const passwordInput = getByTestId(login.DATA_TEST_ID_PASSWORD);
    const loginButton = getByTestId(login.DATA_TEST_ID_LOGING_BTN);

    userEvent.type(emailInput, login.VALID_EMAIL);
    userEvent.type(passwordInput, login.VALID_PASSWORD);
    fireEvent.click(loginButton);

    const store = JSON.parse(localStorage.getItem('user'));

    expect(store.email).toBe(login.VALID_EMAIL);
    // });
  });
  it('should redirect to \'/comidas\' after click on button.', () => {
    // act(() => {
    const { getByTestId, history } = renderWithRouter(<App />);
    const emailInput = getByTestId(login.DATA_TEST_ID_EMAIL);
    const passwordInput = getByTestId(login.DATA_TEST_ID_PASSWORD);
    const loginButton = getByTestId(login.DATA_TEST_ID_LOGING_BTN);

    userEvent.type(emailInput, login.VALID_EMAIL);
    userEvent.type(passwordInput, login.VALID_PASSWORD);
    fireEvent.click(loginButton);
    // const { history } = renderWithRouter(<App />);
    console.log(history.location);
    console.log(history.push);
    expect(history.push).toHaveBeenCalled();
    // const foods = getByTestId('foods');
    expect(history.location.pathname).toBe('/comidas');
    // expect(foods).toBeInTheDocument();
    // });
  });
});

xdescribe('2) Foods page with Navigator, Explorer, and Profile.', () => {
  it('should render after users login confimation.', () => {
    act(() => {
      renderWithRouter(<Foods />);
    });
  });
});

xdescribe('3) Profile page renders after login and clicking on Profile button.', () => {
  it('should render after users login confimation and blick on Profile button.', () => {
    act(() => {
      renderWithRouter(<Profile />);
    });
  });
});

xdescribe('4) Explorer page renders after login and clicking on Explorer button.', () => {
  it('should render after users login confimation and blick on Explorer button.', () => {
    act(() => {
      renderWithRouter(<Explorer />);
    });
  });
});

xdescribe('5) Drinks page renders after login and clicking on Drinks button.', () => {
  it('should render after users login confimation and blick on Drinks button.', () => {
    act(() => {
      renderWithRouter(<Drinks />);
    });
  });
});
