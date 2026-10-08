import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { UserStatusBadge } from './UserStatusBadge.jsx';

afterEach(cleanup);

describe('UserStatusBadge', () => {
  it.each([
    ['Active', 'rgb(22, 163, 74)'],
    ['Inactive', 'rgb(107, 114, 128)'],
    ['Pending', 'rgb(249, 115, 22)'],
  ])('renders %s with its colour', (status, background) => {
    render(<UserStatusBadge status={status} />);
    expect(screen.getByText(status).style.backgroundColor).toBe(background);
  });

  it('renders Unknown on gray for any other status', () => {
    render(<UserStatusBadge status="Banned" />);
    expect(screen.getByText('Unknown').style.backgroundColor).toBe('rgb(107, 114, 128)');
    expect(screen.queryByText('Banned')).toBeNull();
  });
});
