import React from 'react';
import { render } from '@testing-library/react';
import App from '../pages/App/App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});