import { render } from '@testing-library/react';

import Minimal from './minimal';

describe('Minimal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Minimal />);
    expect(baseElement).toBeTruthy();
  });
});
