import Coin from './Coin';
import CoinMeta from './CoinMeta';

export default interface ContextType {
  latestData: {
    isLoading: boolean;
    isFetching: boolean;
    data: { data: Coin[] };
    error: unknown;
  };
  metaData: {
    isLoading: boolean;
    isFetching: boolean;
    metaData: { data: CoinMeta[] };
    error: unknown;
  };
}
