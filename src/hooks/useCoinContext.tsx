import { useContext } from 'react';
import CoinsContext from '~/context/CoinsContext';

const useCoinContext = () => {
  const contextData = useContext(CoinsContext);
  if (contextData === null) {
    throw new Error('useCoinContext must be used within the CoinContextProvider.');
  }
  return contextData;
};

export default useCoinContext;
