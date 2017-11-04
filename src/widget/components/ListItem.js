import buildfire from 'buildfire';
import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { item } = this.props;


    let folderName = item.folderName || item.pluginType.folderName;

    buildfire.navigation.navigateTo({
      pluginId: item.pluginTypeId,
      instanceId: item.instanceId,
      title: item.title,
      folderName: folderName
    });
  }

  render() {
    const { item, settings } = this.props;
    if (!settings) return null;

    return (
      <div className='list-item' onClick={ this.handleClick }>

        <div className='list-item-content'>
          { settings.imagePosition === 'icon' ? (
            <div
              className='image-icon'
              style={{ backgroundImage: `url(${item.iconUrl})` }} />
          ) : null }

          { settings.showTitles ? <h1>{ item.title }</h1> : null }
          { settings.showOverlay ? <div className='overlay' /> : null }

          { settings.imagePosition === 'background' ? (
            <div
              className='image-background'
              style={{ backgroundImage: `url(${item.iconUrl})` }} />
          ) : null }
        </div>
      </div>
    );
  }
}

export default ListItem;
