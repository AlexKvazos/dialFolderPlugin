import buildfire from 'buildfire';
import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { item } = this.props;

    buildfire.navigation.navigateTo({
      pluginId: item.pluginTypeId,
      instanceId: item.instanceId,
      title: item.title,
      folderName: item.folderName
    });
  }

  render() {
    const { item, settings } = this.props;

    return (
      <div className='list-item' onClick={ this.handleClick }>
        <div className='list-item-content'>
          { settings.showTitles ? <h1>{ item.title }</h1> : null }
          { settings.showOverlay ? <div className='overlay' /> : null }
          <div
            className='image-background'
            style={{ backgroundImage: `url(${item.iconUrl})` }} />
        </div>
      </div>
    );
  }
}

export default ListItem;
