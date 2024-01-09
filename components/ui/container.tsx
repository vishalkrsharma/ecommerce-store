import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
};

export default Container;
