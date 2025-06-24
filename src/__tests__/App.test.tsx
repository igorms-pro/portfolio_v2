import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText(/welcome to my 3D portfolio/i)).not.toBeInTheDocument();
  });
});
