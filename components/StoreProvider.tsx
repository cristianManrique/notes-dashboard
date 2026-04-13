'use client'

import { Provider } from 'react-redux';
import { store } from '@/store/store';

// Inject Redux store into the React component tree
const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
};

export default StoreProvider;
