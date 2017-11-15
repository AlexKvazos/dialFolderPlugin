import buildfire from 'buildfire';
import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageWidthLimit: window.innerWidth };
  }

  handleClick = () => {
    const { item } = this.props;
    const folderName = item.folderName || item.pluginType.folderName;

    buildfire.navigation.navigateTo({
      pluginId: item.pluginTypeId,
      instanceId: item.instanceId,
      title: item.title,
      folderName: folderName
    });
  }

  render() {
    const { imageWidthLimit } = this.state;
    const { item, settings } = this.props;
    if (!settings) return null;

    return (
      <div className='list-item' onClick={ this.handleClick } ref={ n => this.n = n }>

        <div className='list-item-content'>
          { settings.imagePosition === 'icon' ? (
            <div
              className='image-icon'
              style={{ backgroundImage: `url(https://czi3m2qn.cloudimg.io/s/width/${imageWidthLimit}/${item.iconUrl})` }} />
          ) : null }

          { settings.showTitles ? <h1>{ item.title }</h1> : null }
          { settings.showOverlay ? <div className='overlay' /> : null }

          { settings.imagePosition === 'background' ? (
            <div
              className='image-background'
              style={{ backgroundImage: `url(https://czi3m2qn.cloudimg.io/s/width/${imageWidthLimit}/${item.iconUrl})` }} />
          ) : null }
        </div>
      </div>
    );
  }
}

export default ListItem;
