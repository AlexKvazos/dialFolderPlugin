import buildfire, { components } from 'buildfire';
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.viewer = new components.carousel.view('#carousel');

    buildfire.datastore.get('carousel', (err, result) => {
      if (err) return console.error(err);
      this.viewer.loadItems(result.data.items);
    });

    buildfire.datastore.onUpdate(update => {
      if (update.tag !== 'carousel') return;
      this.viewer.loadItems(update.data.items);
    }, true);
  }

  render() {
    return (
      <div id="carousel" />
    );
  }
}

export default Carousel;
