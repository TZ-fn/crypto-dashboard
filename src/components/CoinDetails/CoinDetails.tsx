import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function CoinDetails() {
  let params = useParams();
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['latest'],
    queryFn: async () => {
      const response = await fetch('https://crypto-dashboard-backend-5tas.onrender.com/latest');
      const data = await response.json();
      return data;
    },
  });

  return <div>CoinDetails: {params.name}</div>;
}

export default CoinDetails;
