import React from 'react';
import ListItem from './ListItem';
import { Lazy } from 'react-lazy';

class PluginList extends React.Component {

  render() {
    const { settings, plugins } = this.props;

    return (
      <div>
        { plugins.map((item, index) => (
            <div className='column' key={ index } >
              <Lazy cushion={ 100 } height={ settings.itemSize }>
                <ListItem item={ item } settings={ settings } />
              </Lazy>
            </div>
        )) }
      </div>
    );
  }
}

export default PluginList;
