import React from 'react';
import buildfire from 'buildfire';
import getStyleSheet from './lib/getStyleSheet';
import getDefaultSettings from './lib/getDefaultSettings';
import debounce from './lib/debounce';
import GeneralSettings from './GeneralSettings';
import TitleSettings from './TitleSettings';
import ImageSettings from './ImageSettings';
import MyPresets from './MyPresets';

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Get the settings saved on the datastore or apply the
   * default settings if none exist.
   */
  componentWillMount() {
    buildfire.datastore.get('settings', (err, {data}) => {
      if (err) return console.error(err);

      // Save default settings if none has been saved
      if (!data.layout || !data.css) {
        const settings = getDefaultSettings();
        this.setState({ settings });
        this.handleSave(settings);
      }

      this.setState({ settings: data });
    });
  }

  /**
   * Handle preset selection and instantly apply the new settings
   *
   * @param   {Object} preset Settings object
   */
  onPresetSelect = preset => {
    const settings = Object.assign({}, preset);
    settings.css = getStyleSheet(preset);
    buildfire.datastore.save(settings, 'settings');
    this.setState({ settings });
  };

  /**
   * Handle settings input changes
   *
   * @param   {Event} e 'onchange' event object
   */
  onChange = e => {
    this.setState(prevState => {

      let value;
      if (e.target.type === 'checkbox') {
        value = e.target.checked;
      } else if (e.target.type === 'number') {
        value = parseFloat(e.target.value);
      } else {
        value = e.target.value;
      }

      prevState.settings[e.target.name] = value;
      return prevState;
    });

    this.handleSave(this.state.settings);
  };

  /**
   * Handles saving settings and compiled css styleshet into
   * the datastore. This function will debounce any calls made
   * if it was called less than 600ms ago.
   */
  handleSave = debounce((settings) => {
    settings.css = getStyleSheet(settings);
    buildfire.datastore.save(settings, 'settings');
  }, 600);

  render() {
    const { settings } = this.state;
    if (!settings) return null;

    return (
      <div>
        <div className='row'>
          <div className='col-xs-12'>
            <MyPresets settings={ settings } onPresetSelect={ this.onPresetSelect } />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-4'>
            <GeneralSettings
              onChange={ this.onChange }
              settings={ settings } />
          </div>
          <div className='col-xs-8'>
            <TitleSettings
              onChange={ this.onChange }
              settings={ settings } />
              <hr />
            <ImageSettings
              onChange={ this.onChange }
              settings={ settings } />
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
