import { useContext } from 'react';
import CoinsContext from '~/context/CoinsContext';

const useCoinContext = () => {
  const contextData = useContext(CoinsContext);
  if (contextData === null) {
    throw new Error('Coins data is missing, please try again.');
  }
  return contextData;
};

export default useCoinContext;
