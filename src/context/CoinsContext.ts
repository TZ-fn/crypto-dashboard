import { createContext } from 'react';
import ContextType from 'types/ContextType';

const CoinsContext = createContext<ContextType | null>(null);

export default CoinsContext;
