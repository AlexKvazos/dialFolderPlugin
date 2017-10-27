import buildfire from 'buildfire';
import React from 'react';

class MyPresets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { presets: [] };
  }

  componentWillMount() {
    buildfire.datastore.get('presets', (err, result) => {
      if (err) return console.error(err);
      if (result.data && result.data.length) {
        this.setState({ presets: result.data });
      }
    });
  }

  handleAdd = () => {
    const preset = this.props.settings;
    delete preset.css; // Remove generated css cache

    this.setState(prevState => {
      prevState.presets.push(preset);
      return prevState;
    });

    this.handleSave();
  }

  handleDelete = (e, index) => {
    e.stopPropagation();
    this.setState(prevState => {
      prevState.presets.splice(index, 1);
      return prevState;
    });
    this.handleSave();
  }

  handleSave() {
    const { presets } = this.state;
    buildfire.datastore.save(presets, 'presets');
  }

  render() {
    const { presets } = this.state;

    return (
      <div>
        <h3 style={{ marginTop: 0 }}>My Presets</h3>
        <div className='preset-container'>
            { presets.map((preset, index) => (
              <div className='preset-wrapper' key={ index }>
                <button
                  className='preset'
                  onClick={ () => this.props.onPresetSelect(preset) }>
                  <span onClick={ (e) => this.handleDelete(e, index) } className='delete'>
                    x
                  </span>
                  <span className='name'>
                    Preset { index + 1 }
                  </span>
                </button>
              </div>
            )) }
            <div className='preset-wrapper'>
              <button className='preset placeholder' onClick={ this.handleAdd }>
                <span className='name'>+ Add</span>
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default MyPresets;
