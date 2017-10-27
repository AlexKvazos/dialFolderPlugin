import buildfire from 'buildfire';
import React from 'react';

class ImageSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  showImageDialog(imageType) {
    const dialogOptions = {
      showIcons: false,
      multiSelection: false
    };

    // Request user to select image
    buildfire.imageLib.showDialog(dialogOptions, (err, result) => {
      if (err) return console.error(err);

      // Stop if we don't have any images
      if (!result || !result.selectedFiles || !result.selectedFiles.length > 0) {
        return;
      }

      // Create event schim as if image was sent as an input
      const e = { target: {
        name: 'backgroundImage' + imageType,
        value: result.selectedFiles[0]
      }};

      // Send event schim to parent controller for storage
      this.props.onChange(e);
    });
  }

  /**
   * Remove a background image
   *
   * @param   {String} imageType Image type if applicable
   */
  removeImage(imageType) {
    // Create event schim as if image was sent as an input
    const e = { target: {
      name: 'backgroundImage' + imageType,
      value: false
    }};

    // Send event schim to parent controller for storage
    this.props.onChange(e);
  }

  render() {
    const { settings } = this.props;

    return (
      <div>
        <h3>Images</h3>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='form-group'>
            <label>Show plugin images as...</label>
            <select
              name='imagePosition'
              value={ settings.imagePosition }
              onChange={ this.props.onChange }
              className='form-control'>
              <option value='background'>Background</option>
              <option value='icon'>Icon</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Background Images</label>
            <div className='row background-images-form'>
              <div className='col-xs-6'>
                <div className='phone'>
                  { settings.backgroundImage ? (
                    <div
                      className='background-image-preview'
                      style={{ backgroundImage: `url(${settings.backgroundImage})` }} />
                  ) : (
                    <span className='empty'>
                      750x1334
                      <br />
                      No Image
                    </span>
                  ) }
                </div>
                { settings.backgroundImage ? (
                  <div>
                    <a onClick={ () => this.showImageDialog('') }>Change Image</a>
                    <a className='destroy' onClick={ () => this.removeImage('') }>Remove Image</a>
                  </div>
                ) : (
                  <a onClick={ () => this.showImageDialog('') }>Add Image</a>
                ) }
              </div>
              <div className='col-xs-6'>
                <div className='phone lg'>
                  { settings.backgroundImageLarge ? (
                    <div
                      className='background-image-preview'
                      style={{ backgroundImage: `url(${settings.backgroundImageLarge})` }} />
                  ) : (
                    <span className='empty'>
                      1536x2048
                      <br />
                      No Image
                    </span>
                  ) }
                </div>
                { settings.backgroundImageLarge ? (
                  <div>
                    <a onClick={ () => this.showImageDialog('Large') }>Change Image</a>
                    <a className='destroy' onClick={ () => this.removeImage('Large') }>Remove Image</a>
                  </div>
                ) : (
                  <a onClick={ () => this.showImageDialog('Large') }>Add Image</a>
                ) }
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ImageSettings;
