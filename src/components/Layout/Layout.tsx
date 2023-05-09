import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import MainView from '../MainView/MainView';
import { useQuery } from '@tanstack/react-query';
import queryLatestData from 'queryFunctions/queryLatestData';
import Coin from '~/types/Coin';
import queryMetaData from 'queryFunctions/queryMetaData';
import CoinsContext from 'context/CoinsContext';

export default function Layout() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['latest'],
    queryFn: queryLatestData,
  });

  const coinIDs = data?.data.map((coin: Coin) => coin.id).join(',');

  const {
    isFetching: metaIsFetching,
    error: metaError,
    data: meta,
  } = useQuery({
    queryKey: ['meta', coinIDs],
    queryFn: () => queryMetaData(coinIDs),
    enabled: !!coinIDs,
  });

  return (
    <CoinsContext.Provider value={data}>
      <div>
        <Header />
        <MainView>
          <Outlet />
        </MainView>
      </div>
    </CoinsContext.Provider>
  );
}
