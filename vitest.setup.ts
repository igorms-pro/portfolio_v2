import '@testing-library/jest-dom';
import { vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});

global.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 0);
global.cancelAnimationFrame = (id: number) => clearTimeout(id);
window.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 0);
window.cancelAnimationFrame = (id: number) => clearTimeout(id);
