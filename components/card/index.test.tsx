/* eslint-disable no-undef */
import Component from './index';
import { render, screen, waitFor } from '@testing-library/react';

const data = {
  mission_name: 'Test Mission',
  launch_date_utc: '01.12.2022',
  links: {
    mission_patch_small: '/image.jpg',
  },
  rocket: {
    first_stage: {
      cores: [
        {
          core_serial: 'Test123',
        },
      ],
    },
    second_stage: {
      payloads: [
        {
          payload_type: 'Test Type',
          payload_id: 'Test Id',
        },
      ],
    },
  },
  launch_success: false,
  launch_failure_details: {
    reason: 'Test failure',
  },
};
describe('Card component', () => {
  it('should display data from props', async () => {
    render(<Component item={data} />);

    await waitFor(() => {
      expect(screen.queryByText('Test Mission')).toBeTruthy();
      expect(screen.queryByText('Core Serial: Test123')).toBeTruthy();
      expect(screen.queryByText('(Test failure)')).toBeTruthy();
      expect(document.querySelector('img').src).toContain('image.jpg');
    });
  });
});
