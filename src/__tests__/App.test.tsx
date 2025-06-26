import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  //TODO
  it.skip('renders the Hero section via App', () => {
    render(<App />);
    expect(screen.getByText(/Shapping/i)).toBeInTheDocument();
  });
});
