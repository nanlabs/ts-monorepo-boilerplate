import React, { useLayoutEffect } from 'react';

export default function App() {
  useLayoutEffect(() => {
    console.log('content view loaded');
  }, []);

  return <div className="content-view">content view</div>;
}
