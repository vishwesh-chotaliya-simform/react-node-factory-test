import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { UserStatusBadge } from './UserStatusBadge.jsx';

afterEach(cleanup);

const GRAY = 'rgb(107, 114, 128)';

describe('UserStatusBadge edge cases', () => {
  it.each([
    ['undefined', undefined],
    ['null', null],
    ['empty string', ''],
    ['lowercase of a known status', 'active'],
    ['object prototype key', 'constructor'],
    ['object prototype method', 'toString'],
    ['__proto__', '__proto__'],
  ])('renders Unknown on gray for %s', (_label, status) => {
    render(<UserStatusBadge status={status} />);
    const badge = screen.getByText('Unknown');
    expect(badge.style.backgroundColor).toBe(GRAY);
  });

  it('renders exactly one badge element with the status text', () => {
    const { container } = render(<UserStatusBadge status="Pending" />);
    expect(container.children).toHaveLength(1);
    expect(container.textContent).toBe('Pending');
  });
});
