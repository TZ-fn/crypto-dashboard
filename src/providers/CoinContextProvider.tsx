import { ReactNode, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import queryLatestData from '~/queryFunctions/queryLatestData';
import queryMetaData from '~/queryFunctions/queryMetaData';
import CoinsContext from 'context/CoinsContext';
import Coin from '~/types/Coin';

interface CoinContextProviderProps {
  children: ReactNode;
}

export default function CoinContextProvider({ children }: CoinContextProviderProps) {
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey: ['latest'],
    queryFn: queryLatestData,
  });

  const coinIDs = data?.data.map((coin: Coin) => coin.id).join(',');

  const {
    isLoading: metaIsLoading,
    isFetching: metaIsFetching,
    error: metaError,
    data: meta,
  } = useQuery({
    queryKey: ['meta', coinIDs],
    queryFn: () => queryMetaData(coinIDs),
    enabled: !!coinIDs,
  });

  const contextData = {
    latestData: {
      isLoading: isLoading,
      isFetching: isFetching,
      data: data,
      error: error,
    },
    metaData: {
      isLoading: metaIsLoading,
      isFetching: metaIsFetching,
      metaData: meta,
      error: metaError,
    },
  };

  const coinContext = contextData;

  return <CoinsContext.Provider value={coinContext}>{children}</CoinsContext.Provider>;
}
