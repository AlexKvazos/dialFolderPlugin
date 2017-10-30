import React from 'react';
import Carousel from './components/Carousel';
import Editor from './components/Editor';
import PluginInstance from './components/PluginInstance';

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
        <br />
        <PluginInstance />
      </div>
    );
  }
}

export default Content;
