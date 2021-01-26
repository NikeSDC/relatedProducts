/* eslint-disable */
import axios from 'axios';
import React from 'react';

import RelatedItem from './RelatedItem.jsx';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      left: 0,
      right: 2,
      scrollMargin: 0,
      leftButtonColor: 'lightgrey',
      rightButtonColor: 'lightgrey',
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleColor = this.toggleColor.bind(this);
  }


  componentDidMount() {
    axios.get('/api/relatedProducts/db')
      .then((result) => {
        let products = result.data.slice(0, 11);
        this.setState({
          relatedItems: products,
        });
      })
      .catch((err) => { console.log(err); });
  }

  handleClick(event) {
    const { left, right, scrollMargin } = this.state;
    if (( event.target.id === 'sliderLeftArrowSVG' || event.target.id === 'sliderLeftArrowPath' ) && left > 0) {
      this.setState({
        left: left - 1,
        right: right - 1,
        scrollMargin: scrollMargin - 1,
      }, () => {}); // eslint-disable-line
    } else if ((event.target.id === 'sliderRightArrowSVG' || event.target.id === 'sliderRightArrowPath' ) && right < this.state.relatedItems.length - 1) {
      this.setState({
        left: left + 1,
        right: right + 1,
        scrollMargin: scrollMargin + 1,
      }, () => {}) // eslint-disable-line
    } else {
      console.log(`Out of range: Left: ${this.state.left} Right: ${this.state.right}`);
    }
  }

  toggleColor(event) {
    let {leftButtonColor, rightButtonColor} = this.state;
    if (event.target.className === 'sliderArrowButtonLeft') {
      if (this.state.leftButtonColor === 'lightgrey') {
        this.setState({
          leftButtonColor: 'black'
        })
      } else {
        this.setState({
          leftButtonColor: 'lightgrey'
        })
      }
    } else {
      if (this.state.rightButtonColor === 'lightgrey') {
        this.setState({
          rightButtonColor: 'black'
        })
      } else {
        this.setState({
          rightButtonColor: 'lightgrey'
        })
      }
    }

  }

  render() {
    const { left, right } = this.state;
    return (
      <div>
        <div className="sliderContainer">
          <div className="slider">
            <div className="sliderArrowButtonLeft" onMouseEnter={this.toggleColor} onMouseLeave={this.toggleColor}>
              <a id="sliderLeftArrow" href={`#slide-${left}`} onClick={this.handleClick}>
                <svg id="sliderLeftArrowSVG" style={{fill: `${this.state.leftButtonColor}`}} aria-hidden="true" fill="#111" height="15px" width="15px" viewBox="0 0 185.4 300"><path className="sliderLeftArrowImage"  id="sliderLeftArrowPath" d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path></svg>
              </a>
            </div>
            <div className="sliderArrowButtonRight" onMouseEnter={this.toggleColor} onMouseLeave={this.toggleColor}>
              <a id="sliderRightArrow" name="right" href={`#slide-${right}`} onClick={this.handleClick}>
                <svg id="sliderRightArrowSVG" style={{fill: `${this.state.rightButtonColor}`}} aria-hidden="true"  fill="#111" height="15px" width="15px" viewBox="0 0 185.4 300"><path id="sliderRightArrowPath" d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path></svg>
              </a>
            </div>

            <div className="slides">
              {this.state.relatedItems.map((item, key) => {
                return <RelatedItem relatedItem={item} key={item._id} count={key}/>
              })}
            </div>
          </div>
        </div>
        <div id="scrollbarContainer">
          <div id="scrollbar" style={{marginLeft: `${this.state.scrollMargin * 9.5}%`}}></div>
        </div>
      </div>
    );
  }
}

export default Slider;