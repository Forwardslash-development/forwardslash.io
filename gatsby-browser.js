import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/store';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
