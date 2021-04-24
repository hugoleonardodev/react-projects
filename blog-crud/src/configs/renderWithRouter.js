import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const renderWithRouter = (component, route = '/') => {
  const history = createMemoryHistory();
  history.push(route);
  return {
    ...render(<Router history={history}>{component}</Router>),
    history,
  };
};

export default renderWithRouter;
