import buildfire, { components } from 'buildfire';
import React from 'react';

class PluginInstance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    this.plugins.onAddItems = () => this.save();
    this.plugins.onDeleteItem = () => this.save();
    this.plugins.onOrderChange = () => this.save();
    this.plugins.onLoadAll = () => this.save();
    this.plugins.onUnloadAll = () => this.save();

    // Load existing plugins into the plugin sortable list
    buildfire.datastore.getWithDynamicData('plugins', (err, { data }) => {
      if (err) return console.error(err);
      let plugins = data._buildfire.plugins.result.map(plugin => plugin.data);
      this.plugins.loadItems(plugins);
    });
  }

  save() {
    // Buildfire dynamic data object
    // @see https://github.com/BuildFire/sdk/wiki/How-to-use-the-Datastore-Dynamic-Data#data-structure
    let _buildfire = {
      plugins: {
        data: this.plugins.items.map(plugin => plugin.instanceId), // Only get instanceId
        dataType: 'pluginInstance'
      }
    };

    buildfire.datastore.save({ _buildfire }, 'plugins', err => {
      if (err) return console.error(err);
    });
  }

  render() {
    return (
      <div id='plugins' />
    );
  }
}

export default PluginInstance;
