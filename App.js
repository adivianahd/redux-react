import React from 'react';
import { Provider } from 'react-redux';
import MiApp from './src';
import store from './src/Store';

export default function App() {
  return (
    <Provider store={store}>
      <MiApp />
    </Provider>
  );
}
