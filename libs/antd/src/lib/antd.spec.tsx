import { render } from '@testing-library/react';

import Antd from './antd';

describe('Antd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Antd />);
    expect(baseElement).toBeTruthy();
  });
});
