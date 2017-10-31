import React from 'react';
import ListItem from './ListItem';

class PluginList extends React.Component {

  render() {
    const { settings, plugins } = this.props;

    return (
      <div>
        { plugins.map((item, index) => (
          <div className='column' key={ index }>
            <ListItem item={ item } settings={ settings } />
          </div>
        )) }
      </div>
    );
  }
}

export default PluginList;
