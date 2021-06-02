import { render, screen } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('App Movies Version 2.0.0');
  expect(linkElement).toBeInTheDocument();
});