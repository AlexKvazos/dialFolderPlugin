import buildfire, { components } from 'buildfire';
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Mount the carousel into the view and load plugins
   */
  componentDidMount() {
    this.editor = new components.carousel.editor('#carousel');
    this.editor.onAddItems = (items) => this.handleSave();
    this.editor.onDeleteItem = (item, index) => this.handleSave();
    this.editor.onItemChange = (item) => this.handleSave();
    this.editor.onOrderChange = (item, prevIndex, newIndex) => this.handleSave();
    this.getCarouselItems();
  }

  /**
   * Get plugin list and load them into the carousel
   */
  getCarouselItems() {
    buildfire.datastore.get('carousel', (err, result) => {
      if (err) return console.error(err);
      this.editor.loadItems(result.data.items);
    });
  }

  /**
   * Handle saving the contents of the carousel editor
   */
  handleSave = () => {
    const data = { items: this.editor.items };
    buildfire.datastore.save(data, 'carousel');
  }

  render() {
    return (
      <div>
        <div id='carousel' />
      </div>
    );
  }
}

export default Carousel;
