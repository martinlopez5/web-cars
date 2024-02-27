import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/AUTOS ARGENTINA/i);
  expect(titleElement).toBeInTheDocument();
});
