import React from 'react';
import axios from 'axios';
import config from 'config';
import StateApi from 'state-appi';
import { renderToString } from 'react-dom/server';
import App from '../components/App';

const serverRender = async () => {
  const {
    data: { data }
  } = await axios.get(`http://${config.host}:${config.port}/data`);

  const store = new StateApi(data);

  return {
    initialMarkup: renderToString(<App store={store} />),
    initialData: data
  };
};

export default serverRender;
