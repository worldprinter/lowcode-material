import { render } from '@testing-library/react';

import Wdesign from './wdesign';

describe('Wdesign', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Wdesign />);
    expect(baseElement).toBeTruthy();
  });
});
