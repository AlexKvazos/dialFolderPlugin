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
          <div className={ `col-xs-3 ${!settings.showTitles ? 'disabled' : ''}` }>
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
          <div className={ `col-xs-2 ${!settings.showTitles ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Color</label>
              <input
                type='color'
                name='titleColor'
                value={ settings.titleColor }
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
          <div className={ `col-xs-4 ${!settings.showTitles ? 'disabled' : ''}` }>
            <div className='form-group'>
              <label>Padding ({settings.titlePadding}px)</label>
              <input
                type='range'
                min='0'
                max={settings.itemSize * .4}
                name='titlePadding'
                value={ settings.titlePadding }
                onChange={ props.onChange } />
            </div>
          </div>
          <div className={ `col-xs-4 ${!settings.showTitles || settings.imagePosition === 'icon' ? 'disabled' : ''}` }>
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
          <div className={ `col-xs-4 ${!settings.showTitles || settings.imagePosition === 'icon' ? 'disabled' : ''}` }>
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
          <label>Text Shadow</label>
          <div className='row'>
            <div className='col-xs-6'>
              <label>X-Offset</label>
              <input
                type='number'
                name='textShadowX'
                value={ settings.textShadowX }
                onChange={ props.onChange }
                className='form-control' />
            </div>
            <div className='col-xs-6'>
              <label>Y-Offset</label>
              <input
                type='number'
                name='textShadowY'
                value={ settings.textShadowY }
                onChange={ props.onChange }
                className='form-control' />
            </div>
            <div className='col-xs-5'>
              <label>Opacity</label>
              <input
                type='range'
                min='0'
                max='100'
                name='textShadowOpacity'
                value={ settings.textShadowOpacity }
                onChange={ props.onChange } />
            </div>
            <div className='col-xs-5'>
              <label>Blur</label>
              <input
                type='range'
                min='0'
                max='5'
                name='textShadowBlur'
                value={ settings.textShadowBlur }
                onChange={ props.onChange } />
            </div>
            <div className='col-xs-2'>
              <label>Color</label>
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
                type='range'
                min='0'
                max='100'
                name='overlayOpacity'
                value={ settings.overlayOpacity }
                onChange={ props.onChange } />
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
