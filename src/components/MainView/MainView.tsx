import { ReactNode } from 'react';

function MainView({ children }: { children: ReactNode }) {
  return <div className='px-96 py-12'>{children}</div>;
}

export default MainView;
