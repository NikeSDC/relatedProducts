import React from 'react';
import Explore from './Explore.jsx'; // eslint-disable-line
import Slider from './Slider.jsx'; // eslint-disable-line

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Explore />
        <Slider />
      </div>
    );
  }
}

export default Main;