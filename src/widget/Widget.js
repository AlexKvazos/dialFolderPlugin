import React from 'react';
import buildfire from 'buildfire';
import data from './data';
import ListItem from './components/ListItem';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, html: '' };
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
  }

  componentDidMount() {
    // this.carousel = new components.carousel.view('#carousel', []);
    // buildfire.datastore.get('carousel', (err, {data}) => {
    //   if (err) return console.error(err);
    //   this.carousel.loadItems(data.items);
    // });

    this.dataListener = buildfire.datastore.onUpdate(update => {
      switch (update.tag) {
        case 'carousel':
          this.carousel.loadItems(update.data.items);
          break;
        case 'settings':
          this.setState({ settings: update.data });
          break;
        case 'html':
          this.setState({ html: update.data.content });
          break;
      }
    });
  }

  componentWillUnmount() {
    this.dataListener.clear();
  }

  renderList() {
    const { data, settings } = this.state;
    return data.map((item, index) => (
      <div className='column' key={ index }>
        <ListItem item={ item } settings={ settings } />
      </div>
    ));
  }

  render() {
    const { settings, html } = this.state;
    if (!settings) return null;

    return (
      <div>
        <style>{ settings.css }</style>
        <div id='carousel' />
        { html && html.length ? <div dangerouslySetInnerHTML={{ __html: html }} /> : null }
        { this.renderList() }
      </div>
    );
  }
}

export default Widget;
