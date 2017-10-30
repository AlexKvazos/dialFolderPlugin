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

    // Bind events
    this.plugins.onAddItems = (...params) => this.onAddItems(...params);
    this.plugins.onDeleteItem = (...params) => this.onDeleteItem(...params);
    this.plugins.onOrderChange = (...params) => this.onOrderChange(...params);
    this.plugins.onLoadAll = (...params) => this.onLoadAll(...params);
    this.plugins.onUnloadAll = (...params) => this.onUnloadAll(...params);
  }

  onAddItems() {

  }

  onDeleteItem(item, index) {

  }

  onOrderChange(item, oldIndex, newIndex) {

  }

  onLoadAll() {

  }

  onUnloadAll() {

  }

  render() {
    return (
      <div id='plugins' />
    );
  }
}

export default PluginInstance;
