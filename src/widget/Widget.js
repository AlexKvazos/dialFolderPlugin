import React from 'react';
import buildfire from 'buildfire';
import Carousel from './components/Carousel';
import PluginList from './components/PluginList';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      plugins: [],
      html: ''
    };
  }

  getPluginList() {
    // Get plugin list
    buildfire.datastore.getWithDynamicData('plugins', (err, { data }) => {
      if (err) return console.error(err);
      const plugins = data._buildfire.plugins.result.map(plugin => plugin.data);
      this.setState({ plugins });
    });
  }

  componentWillMount() {
    // Get settings
    buildfire.datastore.get('settings', (err, {data}) => {
      if (err) return console.error('Error loading layout');
      this.setState({ settings: data });
    });

    // Get html content
    buildfire.datastore.get('html', (err, {data}) => {
      if (err) return console.error('Error loading layout');
      this.setState({ html: data.content });
    });

    this.getPluginList();
  }

  componentDidMount() {
    this.dataListener = buildfire.datastore.onUpdate(update => {
      switch (update.tag) {
        case 'settings':
          this.setState({ settings: update.data });
          break;
        case 'html':
          this.setState({ html: update.data.content });
          break;
        case 'plugins':
          this.getPluginList();
          break;
      }
    }, true);
  }

  componentWillUnmount() {
    this.dataListener.clear();
  }

  render() {
    const { settings, html, plugins } = this.state;
    if (!settings) return null;

    return (
      <div>
        <style>{ settings.css }</style>
        <Carousel />
        { html && html.length ? <div dangerouslySetInnerHTML={{ __html: html }} /> : null }
        <PluginList plugins={ plugins } settings={ settings } />
      </div>
    );
  }
}

export default Widget;
