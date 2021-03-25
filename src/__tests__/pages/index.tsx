import { render, screen } from '@testing-library/react';

import Home from '@pages';

describe('Home page', () => {
  it('should render the heading', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /welcome/i }),
    ).toBeInTheDocument();
  });
});
