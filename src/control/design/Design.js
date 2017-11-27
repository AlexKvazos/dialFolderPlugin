import React from 'react';
import buildfire from 'buildfire';
import getStyleSheet from './lib/getStyleSheet';
import getDefaultSettings from './lib/getDefaultSettings';
import debounce from './lib/debounce';
import GeneralSettings from './components/GeneralSettings';
import TitleSettings from './components/TitleSettings';
import ImageSettings from './components/ImageSettings';
import MyPresets from './components/MyPresets';

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
    buildfire.datastore.get((err, {data}) => {
      if (err) return console.error(err);

      // Save default settings if none has been saved
      if (!data.settings || !data.settings.css) {
        data.settings = getDefaultSettings();
        this.setState(data);
        this.handleSave();
      }

      this.setState(data);
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
      } else if (e.target.type === 'number' || e.target.type === 'range') {
        value = parseFloat(e.target.value);
      } else {
        value = e.target.value;
      }

      prevState.settings[e.target.name] = value;
      return prevState;
    });

    this.handleSave();
  };

  /**
   * Handles saving settings and compiled css styleshet into
   * the datastore. This function will debounce any calls made
   * if it was called less than 600ms ago.
   */
  handleSave = debounce(() => {
    const { settings } = this.state;
    settings.css = getStyleSheet(settings);
    this.setState({ settings });
    buildfire.datastore.save(this.state, err => {
      if (err) return console.error(err);
    });
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
