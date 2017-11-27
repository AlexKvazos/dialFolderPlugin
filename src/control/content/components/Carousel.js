import buildfire, { components } from 'buildfire';
import React from 'react';
import debounce from '../lib/debounce';

class Carousel extends React.Component {

  componentWillMount() {
    this.fetchData = new Promise((resolve, reject) => {
      buildfire.datastore.get((err, { data }) => {
        if (err) return reject(err);
        this.setState(data);
        resolve();
      });
    });
  }

  componentDidMount() {
    this.editor = new components.carousel.editor('#carousel');
    this.editor.onAddItems = (items) => this.handleSave();
    this.editor.onDeleteItem = (item, index) => this.handleSave();
    this.editor.onItemChange = (item) => this.handleSave();
    this.editor.onOrderChange = (item, prevIndex, newIndex) => this.handleSave();
    this.fetchData.then(() => {
      if (this.state.carousel) {
        this.editor.loadItems(this.state.carousel.items);
      }
    });
  }

  /**
   * Handle saving the contents of the carousel editor
   */
  handleSave = debounce(() => {
    const carousel = { items: this.editor.items };
    this.setState({ carousel });
    buildfire.datastore.save(this.state, err => {
      if (err) return console.error(err);
    });
  }, 600);

  render() {
    return (
      <div>
        <div id='carousel' />
      </div>
    );
  }
}

export default Carousel;
