import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const searchElement = screen.getByText(/Поиск/i);
  expect(searchElement).toBeInTheDocument();
});
