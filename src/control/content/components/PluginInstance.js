import buildfire, { components } from 'buildfire';
import React from 'react';
import debounce from '../lib/debounce';

class PluginInstance extends React.Component {

  componentWillMount() {
    this.fetchData = new Promise((resolve, reject) => {
      buildfire.datastore.getWithDynamicData((err, { data }) => {
        if (err) return reject(err);
        this.setState(data);
        resolve();
      });
    });
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

    this.fetchData.then(() => {
      let plugins =
        this.state.plugins &&
        this.state.plugins._buildfire &&
        this.state.plugins._buildfire.plugins
        ? this.state.plugins._buildfire.plugins.result.map(plugin => plugin.data)
        : [];
      this.plugins.loadItems(plugins);
    });
  }

  save = debounce(() => {
    // Buildfire dynamic data object
    // @see https://github.com/BuildFire/sdk/wiki/How-to-use-the-Datastore-Dynamic-Data#data-structure
    let _buildfire = {
      plugins: {
        data: this.plugins.items.map(plugin => plugin.instanceId),
        dataType: 'pluginInstance'
      }
    };

    const plugins = { _buildfire };
    this.setState({ plugins });
    buildfire.datastore.save(this.state, err => {
      if (err) return console.error(err);
    });
  }, 600)

  render() {
    return (
      <div id='plugins' />
    );
  }
}

export default PluginInstance;
