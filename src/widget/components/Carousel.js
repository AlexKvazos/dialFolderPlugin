import buildfire, { components } from 'buildfire';
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  createCarousel(items) {
    // Clean carousel if we already have one
    if (this.carouselComponent) {
      this.carouselComponent._destroySlider();
      this.carousel.className = '';
      this.carousel.innerHTML = '';
      delete this.carouselComponent;
    }

    // Skip if we have no items
    if (!items.length) return;

    // Mount carousel
    this.carouselComponent = new components.carousel.view({
      selector: this.carousel, items
    });
  }

  componentDidMount() {
    buildfire.datastore.get('carousel', (err, result) => {
      if (err) return console.error(err);
      let { items } = result.data;
      this.createCarousel(items);
    });

    buildfire.datastore.onUpdate(update => {
      if (update.tag !== 'carousel') return;
      this.createCarousel(update.data.items);
    }, true);
  }

  render() {
    return (
      <div id='carousel' ref={ node => this.carousel = node } />
    );
  }
}

export default Carousel;
