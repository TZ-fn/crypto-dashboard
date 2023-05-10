import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MainView from '../MainView/MainView';
import { useQuery } from '@tanstack/react-query';
import queryLatestData from 'queryFunctions/queryLatestData';
import Coin from '~/types/Coin';
import queryMetaData from 'queryFunctions/queryMetaData';
import CoinsContext from 'context/CoinsContext';

export default function Layout() {
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

  return (
    <CoinsContext.Provider value={contextData}>
      <div>
        <Header />
        <MainView>
          <Outlet />
        </MainView>
      </div>
    </CoinsContext.Provider>
  );
}
