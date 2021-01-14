import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 1,
      right: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // eslint wanted me to use const
    const { left, right } = this.state;
    if (event.target.name === 'left' && left > 1) {
      this.setState({
        left: left - 1,
        right: right - 1,
      }, () => {console.log(`Left: ${this.state.left} Right: ${this.state.right}`)}); // eslint-disable-line
    } else if (event.target.name === 'right' && right < 5) {
      this.setState({
        left: left + 1,
        right: right + 1,
      }, () => {console.log(`Left: ${this.state.left} Right: ${this.state.right}`)}) // eslint-disable-line
    } else {
      console.log('Out of range');
    }
  }

  render() {
    const { left, right } = this.state;
    return (
      <div>
        <a name="left" href={`#slide-${left}`} onClick={this.handleClick}>Left</a>
        <div> </div>
        <a name="right" href={`#slide-${right}`} onClick={this.handleClick}>Right</a>
        <div className="slider">
          <div className="slides">
            <div id="slide-1">
              1
            </div>
            <div id="slide-2">
              2
            </div>
            <div id="slide-3">
              3
            </div>
            <div id="slide-4">
              4
            </div>
            <div id="slide-5">
              5
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Slider;
