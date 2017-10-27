import React from 'react';
import Carousel from './Carousel';
import Editor from './Editor';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Image Carousel</h3>
        <Carousel />
        <h3>Text Editor</h3>
        <Editor />
      </div>
    );
  }
}

export default Content;
