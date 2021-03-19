/* eslint-disable max-len */
// Meals and Drinks API URLS
export const FOOD_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}';
export const FOOD_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s={nome}';
export const FOOD_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}';
export const TEST = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

// Login email and password validation constants
export const MIN_EMAIL_LENGTH = 6;
export const VALID_EMAIL = 'alguem@email.com';
export const VALID_EMAIL_REGEX = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
export const VALID_PASSWORD = '123456';
export const DATA_TEST_ID_EMAIL = 'email-input';
export const DATA_TEST_ID_PASSWORD = 'password-input';
export const DATA_TEST_ID_LOGING_BTN = 'login-submit-btn';

export const login = {
  MIN_EMAIL_LENGTH: 6,
  VALID_EMAIL: 'alguem@email.com',
  VALID_EMAIL_REGEX: /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
  VALID_PASSWORD: '123456',
  DATA_TEST_ID_EMAIL: 'email-input',
  DATA_TEST_ID_PASSWORD: 'password-input',
  DATA_TEST_ID_LOGING_BTN: 'login-submit-btn',
};
