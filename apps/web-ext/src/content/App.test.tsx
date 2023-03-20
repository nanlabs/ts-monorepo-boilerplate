import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '@/content/App';

describe('appTest', () => {
  test('render text', () => {
    // given
    const text = 'content view';

    // when
    render(<App />);

    // then
    screen.getByText(text);
  });
});
