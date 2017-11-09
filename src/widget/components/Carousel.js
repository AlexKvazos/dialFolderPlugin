import buildfire, { components } from 'buildfire';
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  createCarousel(items) {
    if (this.carouselComponent) this.carouselComponent._destroySlider();

    this.carouselComponent = new components.carousel.view({
      selector: this.carousel, items
    });
  }

  componentDidMount() {
    buildfire.datastore.get('carousel', (err, result) => {
      if (err) return console.error(err);
      let { items } = result.data;
      if (items && items.length > 0) {
        this.createCarousel(items);
      }
    });

    buildfire.datastore.onUpdate(update => {
      if (update.tag !== 'carousel') return;
      if (update.data.items && update.data.items.length > 0) {
        this.createCarousel(update.data.items);
      }
    }, true);
  }

  render() {
    return (
      <div ref={ node => this.carousel = node } />
    );
  }
}

export default Carousel;
