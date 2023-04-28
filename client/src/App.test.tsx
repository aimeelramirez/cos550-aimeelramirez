import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

setTimeout(() => {
}, 8000);

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
test('preload', () => {
  render(<App />);
  jest.advanceTimersByTime(8000)

});
describe("Timeout Test after loaded", () => {
  test(`after timeout`, async () => {
   console.log('Loaded after 80000')
  }, 10000);
});
