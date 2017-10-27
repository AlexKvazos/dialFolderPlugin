import React from 'react';
import Carousel from './components/Carousel';
import Editor from './components/Editor';

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
