import React from 'react';

const TitleSettings = (props) => {
  const { settings } = props;

  return (
    <div>
      <h3>Titles</h3>
      <form onSubmit={ e => e.preventDefault() }>
        <div className='row'>
          <div className='col-xs-3'>
            <label>Show Titles</label>
            <div>
              <input
                type='checkbox'
                className='ios8-switch'
                name='showTitles'
                checked={ settings.showTitles }
                onChange={ props.onChange }
                id='title-checkbox' />
              <label htmlFor='title-checkbox' />
            </div>
          </div>
          <div className={ `col-xs-2 ${!settings.showTitles ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Size</label>
              <input
                type='number'
                name='fontSize'
                value={ settings.fontSize }
                onChange={ props.onChange }
                className='form-control' />
            </div>
          </div>
          <div className={ `col-xs-3 ${!settings.showTitles ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Padding</label>
              <input
                type='number'
                name='titlePadding'
                value={ settings.titlePadding }
                onChange={ props.onChange }
                className='form-control' />
            </div>
          </div>
          <div className={ `col-xs-4 ${!settings.showTitles ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Font Weight</label>
              <select
                type='number'
                name='fontWeight'
                value={ settings.fontWeight }
                onChange={ props.onChange }
                className='form-control' >
                <option value='300'>Light</option>
                <option value='400'>Normal</option>
                <option value='600'>Bold</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className={ `col-xs-6 ${!settings.showTitles ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Vertical Align</label>
              <select
                name='titleVerticalAlign'
                value={ settings.titleVerticalAlign }
                onChange={ props.onChange }
                className='form-control'>
                <option value='top'>Top</option>
                <option value='middle'>Middle</option>
                <option value='bottom'>Bottom</option>
              </select>
            </div>
          </div>
          <div className={ `col-xs-6 ${!settings.showTitles ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Horizontal Align</label>
              <select
                name='titleHorizontalAlign'
                value={ settings.titleHorizontalAlign }
                onChange={ props.onChange }
                className='form-control'>
                <option value='left'>Left</option>
                <option value='center'>Center</option>
                <option value='right'>Right</option>
              </select>
            </div>
          </div>
        </div>
        <div className={ `form-group ${!settings.showTitles ? 'disabled' : ''}` }>
          <label>Text Shadow (X, Y, Opacity, Blur, Color)</label>
          <div className='row'>
            <div className='col-xs-2'>
              <input
                type='number'
                name='textShadowX'
                value={ settings.textShadowX }
                onChange={ props.onChange }
                className='form-control' />
            </div>
            <div className='col-xs-2'>
              <input
                type='number'
                name='textShadowY'
                value={ settings.textShadowY }
                onChange={ props.onChange }
                className='form-control' />
            </div>
            <div className='col-xs-2'>
              <input
                type='number'
                name='textShadowOpacity'
                value={ settings.textShadowOpacity }
                onChange={ props.onChange }
                className='form-control' />
            </div>
            <div className='col-xs-2'>
              <input
                type='number'
                name='textShadowBlur'
                value={ settings.textShadowBlur }
                onChange={ props.onChange }
                className='form-control' />
            </div>
            <div className='col-xs-4'>
              <input
                type='color'
                name='textShadowColor'
                value={ settings.textShadowColor }
                onChange={ props.onChange }
                className='form-control' />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'>
            <label>Show Overlay</label>
            <div>
              <input
                type='checkbox'
                className='ios8-switch'
                name='showOverlay'
                checked={ settings.showOverlay }
                onChange={ props.onChange }
                id='overlay-checkbox' />
              <label htmlFor='overlay-checkbox' />
            </div>
          </div>
          <div className={ `col-xs-4 ${!settings.showOverlay ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Overlay Opacity</label>
              <input
                type='number'
                name='overlayOpacity'
                value={ settings.overlayOpacity }
                onChange={ props.onChange }
                className='form-control'/>
            </div>
          </div>
          <div className={ `col-xs-4 ${!settings.showOverlay ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Overlay Color</label>
              <input
                type='color'
                name='overlayColor'
                value={ settings.overlayColor }
                onChange={ props.onChange }
                className='form-control'/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TitleSettings;
