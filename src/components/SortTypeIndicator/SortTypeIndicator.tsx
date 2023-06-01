function SortTypeIndicator({ type }: { type: 'descending' | 'ascending' | null }) {
  return <span>{type === 'descending' ? '▼' : type === 'ascending' ? '▲' : null}</span>;
}

export default SortTypeIndicator;
