import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';
import '@testing-library/jest-dom';

describe('About component', () => {
  it('מציג כותרת ראשית בעברית', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <About />
      </I18nextProvider>
    );
    expect(screen.getByRole('heading', { name: /אודות/i })).toBeInTheDocument();
  });
}); 