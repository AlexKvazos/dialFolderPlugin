import buildfire from 'buildfire';
import React from 'react';
import debounce from './lib/debounce';

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.tinymce.init({
      selector: '#editor',
      setup: this.setupEditor
    });
  }

  setupEditor = (editor) => {
    // Load existing html contents
    buildfire.datastore.get('html', (err, result) => {
      if (err) return console.error(err);
      if (result.data.content) {
        editor.setContent(result.data.content);
      }

      // Bind editor change/keyup events to save
      editor.on('keyup', (e) => {
        const content = editor.getContent();
        this.handleSave(content);
      });
      editor.on('change', (e) => {
        const content = editor.getContent();
        this.handleSave(content);
      });
    });
  }

  /**
   * Handles saving html content into the datastore. This function will
   * debounce any calls made if it was called less than 600ms ago.
   */
  handleSave = debounce((content) => {
    buildfire.datastore.save({ content }, 'html');
  }, 600);

  render() {
    return (
      <textarea id='editor' />
    );
  }
}

export default Editor;
