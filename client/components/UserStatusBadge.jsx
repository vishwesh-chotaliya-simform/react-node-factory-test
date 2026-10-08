const GRAY = '#6b7280';

const STATUS_COLOURS = {
  Active: '#16a34a',
  Inactive: GRAY,
  Pending: '#f97316',
};

export function UserStatusBadge({ status }) {
  const known = Object.hasOwn(STATUS_COLOURS, status);
  return (
    <span
      style={{
        backgroundColor: known ? STATUS_COLOURS[status] : GRAY,
        color: '#fff',
        padding: '2px 8px',
        borderRadius: '9999px',
        fontSize: '0.75rem',
      }}
    >
      {known ? status : 'Unknown'}
    </span>
  );
}
