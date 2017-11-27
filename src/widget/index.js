import buildfire from 'buildfire';
import React from 'react';
import { render } from 'react-dom';
import Widget from './Widget';

const container = document.getElementById('mount');

var fetchData = new Promise((resolve, reject) => {
  buildfire.datastore.getWithDynamicData((err, { data }) => {
    if (err) return reject(err);

    data.plugins = data.plugins._buildfire && data.plugins._buildfire.plugins
      ? data.plugins._buildfire.plugins.result.map(plugin => plugin.data)
      : [];

    resolve(data);
  });
});

function renderApp() {
  render(<Widget fetchData={ fetchData } />, container);
}

// Set up HMR re-rendering
if (module.hot) {
  module.hot.accept();
  module.hot.accept('./Widget', renderApp);
}

// Initial render
renderApp();
