import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App.tsx', () => {
  test('Deve haver um hello world na página', async () => {
    render(<App />);

    const title = await screen.findByRole('heading');

    expect(title).toBeInTheDocument();
  });

  test('Deve haver um título escrito hello world', async () => {
    render(<App />);

    const title = await screen.findByRole('heading');

    expect(title.textContent).toBe('Hello World!');
  });
});
