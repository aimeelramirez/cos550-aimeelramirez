import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import Loader from './Loader/Loader';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
describe('Loader to be there', () => {
  test('renders a message after a timeout', () => {
    render(<Loader />);
    // Wait for the timeout to elapse
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
    jest.setTimeout(4000); 
  });

});

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
test('preload', () => {
  render(<App />);
  jest.advanceTimersByTime(4000)
});

describe("Timeout Test after loaded", () => {
  test(`after timeout`, async () => {
   console.log('Loaded after 4000')
   
  }, 5000);
});


