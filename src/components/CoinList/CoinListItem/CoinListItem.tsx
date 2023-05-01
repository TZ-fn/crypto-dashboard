interface CoinListItemProps {
  index: number;
  logo: string;
  name: string;
  symbol: string;
  price: string;
  volume24h: string;
}

function CoinListItem({ index, logo, name, symbol, price, volume24h }: CoinListItemProps) {
  return (
    <tr className='border-b-2 bg-bg-lighter hover:bg-bg-lighter-2 cursor-pointer text-lg'>
      <td className='px-12 py-6 rounded-l'>{index}</td>
      <td className='px-12 py-6'>
        <img className='max-w-[10rem]' src={logo} alt='' />
      </td>
      <td className='px-12 py-6'>
        {name} - {symbol}
      </td>
      <td className='px-12 py-6'>{price}</td>
      <td className='px-12 py-6 rounded-r'>{volume24h}</td>
    </tr>
  );
}

export default CoinListItem;
