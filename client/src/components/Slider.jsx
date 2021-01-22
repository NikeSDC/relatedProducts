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
    };
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    axios.get('http://localhost:3000/relatedProducts/db')
      .then((result) => {
        let products = result.data.slice(0, 11);
        this.setState({
          relatedItems: products,
        });
      })
      .catch((err) => { console.log(err); });
  }

  handleClick(event) {
    const { left, right } = this.state;
    console.log(`This is the event id: ${event.target.id}`)
    if (( event.target.id === 'sliderLeftArrowSVG' || event.target.id === 'sliderLeftArrowPath' ) && left > 0) {
      this.setState({
        left: left - 1,
        right: right - 1,
      }, () => {console.log(`Left: ${this.state.left} Right: ${this.state.right}`)}); // eslint-disable-line
    } else if ((event.target.id === 'sliderRightArrowSVG' || event.target.id === 'sliderRightArrowPath' ) && right < this.state.relatedItems.length - 1) {
      this.setState({
        left: left + 1,
        right: right + 1,
      }, () => {console.log(`Left: ${this.state.left} Right: ${this.state.right}`)}) // eslint-disable-line
    } else {
      console.log(`Out of range: Left: ${this.state.left} Right: ${this.state.right}`);
    }
  }

  render() {
    const { left, right } = this.state;
    return (
        <div className="sliderContainer">
          <div className="slider">
            {/* A tags that provide functionality*/}
            <a id="sliderLeftArrow" href={`#slide-${left}`} onClick={this.handleClick}>
              <svg id="sliderLeftArrowSVG" className="sliderLeftArrowImage" aria-hidden="true" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300"><path className="sliderLeftArrowImage"  id="sliderLeftArrowPath" d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path></svg>
            </a>
          <div> </div>
          <a id="sliderRightArrow" name="right" href={`#slide-${right}`} onClick={this.handleClick}>
            <svg id="sliderRightArrowSVG" aria-hidden="true" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300"><path id="sliderRightArrowPath" d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path></svg>
          </a>

            <div className="slides">
              {this.state.relatedItems.map((item, key) => {
                return <RelatedItem relatedItem={item} key={item._id} count={key}/>
              })}
            </div>
          </div>
        </div>
    );
  }
}

export default Slider;