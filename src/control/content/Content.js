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
        <Carousel />
        <br />
        <Editor />
      </div>
    );
  }
}

export default Content;
