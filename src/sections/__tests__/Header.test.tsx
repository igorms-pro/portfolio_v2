import { render, screen } from '@testing-library/react';
import { Header } from '@/sections/Header';
import { words } from '@/constants';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('renders static headings', () => {
    expect(screen.getByTestId('heading-main')).toBeInTheDocument();
    expect(screen.getByTestId('heading-projects')).toBeInTheDocument();
    expect(screen.getByTestId('heading-results')).toBeInTheDocument();
  });

  it('renders intro paragraph', () => {
    expect(screen.getByTestId('intro-paragraph')).toBeInTheDocument();
  });

  it('renders all dynamic words from constants', () => {
    words.forEach((word, index) => {
      expect(screen.getByTestId(`word-${word.text}-${index}`)).toBeInTheDocument();
    });
  });

  it('renders CTA button', () => {
    expect(screen.getByTestId('cta-button')).toBeInTheDocument();
  });
});
