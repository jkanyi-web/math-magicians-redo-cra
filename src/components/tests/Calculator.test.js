import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  it('should update the display and match the snapshot after clicking associated buttons', () => {
    const { getByText, container } = render(<Calculator />);
    const display = getByText('0');

    // Simulate button clicks
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));

    // Check if the display is updated
    expect(display).toHaveTextContent('10');

    // Match the snapshot
    expect(container).toMatchSnapshot();
  });
});
