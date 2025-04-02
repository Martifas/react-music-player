function PlaylistTabButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  const base = 'rounded-full p-2 transition-colors';
  const active =
    label === 'All Songs'
      ? 'bg-blue-400 hover:bg-blue-300'
      : 'bg-green-400 hover:bg-green-300';
  const inactive =
    label === 'All Songs'
      ? 'bg-blue-200 hover:bg-blue-100'
      : 'bg-green-200 hover:bg-green-100';

  return (
    <button
      className={`${base} ${selected ? active : inactive}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default PlaylistTabButton;
