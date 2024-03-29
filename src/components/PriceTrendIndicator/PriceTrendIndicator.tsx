import ArrowUp from 'assets/icons/ArrowUp.png';
import ArrowDown from 'assets/icons/ArrowDown.png';

function PriceTrendIndicator({ trend }: { trend: 'up' | 'down' }) {
  return (
    <img
      className='mx-6 w-[16vw] max-w-[6rem]'
      src={trend === 'up' ? ArrowUp : ArrowDown}
      alt={trend === 'up' ? 'Green arrow pointing upwards' : 'Red arrow pointing downwards'}
    />
  );
}

export default PriceTrendIndicator;
