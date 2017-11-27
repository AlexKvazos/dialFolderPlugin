import buildfire from 'buildfire';
import React from 'react';
import debounce from '../lib/debounce';

class Editor extends React.Component {

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
    window.tinymce.init({
      selector: '#editor',
      setup: (editor) => {

        // Bind editor change/keyup events to save
        editor.on('keyup change', (e) => {
          const content = editor.getContent();
          this.handleSave(content);
        });

        // Set content from async data
        this.fetchData.then(() => {
          if (this.state.wysiwyg) {
            editor.setContent(this.state.wysiwyg.content);
          }
        });
      }
    });
  }

  /**
   * Handles saving html content into the datastore. This function will
   * debounce any calls made if it was called less than 600ms ago.
   */
  handleSave = debounce((content) => {
    const wysiwyg = { content };
    this.setState({ wysiwyg });
    buildfire.datastore.save(this.state, err => {
      if (err) return console.error(err);
    });
  }, 600);

  render() {
    return (
      <textarea id='editor' />
    );
  }
}

export default Editor;
