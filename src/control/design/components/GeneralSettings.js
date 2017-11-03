import React from 'react';

const GeneralSettings = (props) => {
  const { settings } = props;

  return (
    <div>
      <h3>General</h3>
      <form onSubmit={ e => e.preventDefault() }>
        <div className='form-group'>
          <label>Columns ({ settings.columns })</label>
          <input
            type='range'
            min="1"
            max="4"
            name='columns'
            value={ settings.columns }
            onChange={ props.onChange } />
        </div>
        <div className='form-group'>
          <label>Item Height ({ settings.itemSize }px)</label>
          <input
            type='range'
            min='50'
            max='400'
            name='itemSize'
            value={ settings.itemSize }
            onChange={ props.onChange }
            className='' />
        </div>
        <div className='form-group'>
          <label>Item Spacing ({ settings.itemSpacing }px)</label>
          <input
            type='range'
            min='0'
            max='40'
            name='itemSpacing'
            onChange={ props.onChange }
            value={ settings.itemSpacing }
            className=''/>
        </div>
        <div className='form-group'>
          <label>Border Radius ({settings.itemBorderRadius}px)</label>
          <input
            type='range'
            min='0'
            max={settings.itemSize}
            name='itemBorderRadius'
            onChange={ props.onChange }
            value={ settings.itemBorderRadius }
            className='' />
        </div>
        <div className='form-group'>
          <label>Border Size ({settings.itemBorderSize}px)</label>
          <input
            type='range'
            min='0'
            max='10'
            name='itemBorderSize'
            onChange={ props.onChange }
            value={ settings.itemBorderSize }
            className='' />
        </div>
        <div className='form-group'>
          <label>Border Color</label>
          <input
            type='color'
            name='itemBorderColor'
            onChange={ props.onChange }
            value={ settings.itemBorderColor }
            className='form-control' />
        </div>
      </form>
    </div>
  );
};

export default GeneralSettings;
