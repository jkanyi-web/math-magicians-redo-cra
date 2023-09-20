import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import Quotes from '../Quotes';

describe('Quotes', () => {
  // Configure Axios mock before each test
  beforeEach(() => {
    jest.resetAllMocks(); // Reset mock state between tests
  });

  it('should match the snapshot when loading', async () => {
    // Mock Axios to return a promise that never resolves (loading state)
    axios.get.mockResolvedValue(new Promise(() => {}));

    const { asFragment } = render(<Quotes />);

    // Wait for the component to update
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should match the snapshot when a quote is loaded', async () => {
    // Mock Axios to return a successful response with a quote
    axios.get.mockResolvedValue({
      status: 200,
      data: [{ quote: 'Test quote' }],
    });

    const { asFragment } = render(<Quotes />);

    // Wait for the component to update
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should match the snapshot when an error occurs', async () => {
    // Mock Axios to simulate an error
    axios.get.mockRejectedValue(new Error('Network Error'));

    const { asFragment } = render(<Quotes />);

    // Wait for the component to update
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
