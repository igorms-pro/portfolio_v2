import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the Hero section via App', () => {
    render(<App />);
    expect(screen.getByText(/Shapping/i)).toBeInTheDocument();
  });
});
