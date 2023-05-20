import { render } from '@testing-library/react';

import Tdesign from './tdesign';

describe('Tdesign', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tdesign />);
    expect(baseElement).toBeTruthy();
  });
});
