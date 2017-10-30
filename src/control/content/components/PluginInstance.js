import { components } from 'buildfire';
import React from 'react';

class PluginInstance extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const opts = {
      showIcon: true,
      confirmDelete: false
    };

    const secondOpts = {
      itemEditable: true,
      navigationCallback: (...params) => this.navigationCallback(...params)
    };

    const params = ['#plugins', [], opts, undefined, undefined, secondOpts];
    this.plugins = new components.pluginInstance.sortableList(...params);
  }

  navigationCallback() {

  }

  render() {
    return (
      <div id='plugins' />
    );
  }
}

export default PluginInstance;
