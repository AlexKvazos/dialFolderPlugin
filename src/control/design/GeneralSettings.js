import React from 'react';

const GeneralSettings = (props) => {
  const { settings } = props;

  return (
    <div>
      <h3>General</h3>
      <form onSubmit={ e => e.preventDefault() }>
        <div className='form-group'>
          <label>Columns</label>
          <input
            type='number'
            name='columns'
            value={ settings.columns }
            onChange={ props.onChange }
            className='form-control'/>
        </div>
        <div className='form-group'>
          <label>Item Size</label>
          <input
            type='number'
            name='itemSize'
            value={ settings.itemSize }
            onChange={ props.onChange }
            className='form-control' />
        </div>
        <div className='form-group'>
          <label>Item Spacing</label>
          <input
            type='number'
            name='itemSpacing'
            onChange={ props.onChange }
            value={ settings.itemSpacing }
            className='form-control'/>
        </div>
        <div className='form-group'>
          <label>Border Radius</label>
          <input
            type='number'
            name='itemBorderRadius'
            onChange={ props.onChange }
            value={ settings.itemBorderRadius }
            className='form-control' />
        </div>
        <div className='form-group'>
          <label>Border Size</label>
          <input
            type='number'
            name='itemBorderSize'
            onChange={ props.onChange }
            value={ settings.itemBorderSize }
            className='form-control' />
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
