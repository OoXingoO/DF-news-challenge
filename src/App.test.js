import { render } from '@testing-library/react';
import App from './App';

test('App component renders', () => {
  render(<App />);
  const appComponent = render(<App />);

  expect(appComponent).toBeTruthy();
});
