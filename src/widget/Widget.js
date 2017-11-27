import React from 'react';
import buildfire from 'buildfire';
import Carousel from './components/Carousel';
import PluginList from './components/PluginList';

class Widget extends React.Component {

  componentWillMount() {
    this.props.fetchData.then(data => {
      this.setState(data);
    });
  }

  updateData() {
    buildfire.datastore.getWithDynamicData((err, { data }) => {
      if (err) return console.error(err);

      data.plugins = data.plugins._buildfire && data.plugins._buildfire.plugins
        ? data.plugins._buildfire.plugins.result.map(plugin => plugin.data)
        : [];

      this.setState(data);
    });
  }

  componentDidMount() {
    this.dataListener = buildfire.datastore.onUpdate(() => {
      this.updateData();
    }, true);
  }

  componentWillUnmount() {
    this.dataListener.clear();
  }

  render() {
    const { settings, wysiwyg, plugins } = this.state;

    if (!settings) return null;

    return (
      <div>
        <style>{ settings.css }</style>
        <Carousel fetchData={ this.props.fetchData } />
        { wysiwyg && wysiwyg.content && wysiwyg.content.length
            ? <div dangerouslySetInnerHTML={{ __html: wysiwyg.content }} />
            : null }
        <PluginList plugins={ plugins } settings={ settings } />
      </div>
    );
  }
}

export default Widget;
