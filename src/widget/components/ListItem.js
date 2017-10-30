import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, settings } = this.props;

    return (
      <div className='list-item'>
        <div className='list-item-content'>
          { settings.showTitles ? <h1>{ item.title }</h1> : null }
          { settings.showOverlay ? <div className='overlay' /> : null }
          <div
            className='image-background'
            style={{ backgroundImage: `url(${item.img})` }} />
        </div>
      </div>
    );
  }
}

export default ListItem;