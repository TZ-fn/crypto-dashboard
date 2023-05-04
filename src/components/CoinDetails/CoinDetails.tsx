import { useParams } from 'react-router-dom';

interface CoinDetailsProps {
  index: number;
  logo: string;
  name: string;
  symbol: string;
  price: string;
  volume24h: string;
}

function CoinDetails({ index, logo, name, symbol, price, volume24h }: CoinDetailsProps) {
  let params = useParams();

  return <div>CoinDetails: {params.name}</div>;
}

export default CoinDetails;
