import ArrowUp from 'assets/icons/ArrowUp.png';
import ArrowDown from 'assets/icons/ArrowDown.png';

function PriceTrendIndicator({ trend }: { trend: 'up' | 'down' }) {
  return <img src={trend === 'up' ? ArrowUp : ArrowDown} />;
}

export default PriceTrendIndicator;
