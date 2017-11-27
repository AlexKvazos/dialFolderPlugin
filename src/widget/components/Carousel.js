import { components } from 'buildfire';
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
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
    if (!items || !items.length) return;

    // Mount carousel
    this.carouselComponent = new components.carousel.view({
      selector: this.carousel, items
    });
  }

  componentWillMount() {
    // Get 16:9 ratio height in px
    this.setState({ height: window.innerWidth * .5625 });
  }

  componentDidMount() {
    this.props.fetchData.then(data => {
      if (!data.carousel) return;
      let { items } = data.carousel;
      this.setState({ items });
      this.createCarousel(items);
    });
  }

  render() {

    return (
      <div style={{ height: this.state.items.length ? `${this.state.height}px` : 0 }}>
        <div
          id='carousel'
          ref={ node => this.carousel = node } />
      </div>
    );
  }
}

export default Carousel;
