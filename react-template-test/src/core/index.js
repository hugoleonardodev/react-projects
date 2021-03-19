import { login } from '../constants/index';

export const validateEmail = (email) => {
  if (login.VALID_EMAIL_REGEX.test(email)) {
    return (true);
  }
  // window.alert('You have entered an invalid email address!');
  return (false);
};

const MIN_PASSWORD_LENGTH = 6;

export const validatePassword = (password) => {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return (false);
  }
  // window.alert('You have entered an invalid email address!');
  return (true);
};

const MAX_TOKEN_LENGTH = 32;
const INDEX_ZERO = 0;
const TWO = 2;

const randomString = () => {
  const letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let word = [];
  for (let k = INDEX_ZERO; k < MAX_TOKEN_LENGTH; k += 1) {
    word = [...word, letters[Math.floor(Math.random() * letters.length)]];
  }
  return word;
};

export const generateToken = () => {
  const word = randomString();
  console.log(word);
  const token = `${word.slice(word.length / TWO).join('')}
    -${word.slice(INDEX_ZERO, word.length / TWO).join('')}`;
  return token;
};
