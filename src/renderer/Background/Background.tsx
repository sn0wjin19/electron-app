import * as React from 'react';

export interface BackgroundProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  // return <div className='min-h-screen bg-gradient-to-t'>{children}</div>;
  return <div>{children}</div>;
}
