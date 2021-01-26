/* eslint-disable */
import React from 'react';

const RelatedItem = (props) => {
  // On sale
  if (props.relatedItem.currentPrice) {
    return (
      <div className="relatedItem" id={`slide-${props.count}`}>
        <div className="image">
          <img src={props.relatedItem.media.smallImageUrl} ></img>
        </div>
        <div className="info">
          <div className="shoeName">{props.relatedItem.title}</div>
          <div className="category">{props.relatedItem.type}</div>
          <div className="price">{`$${props.relatedItem.currentPrice}`}</div>
          <span className="originalPrice">{`$${props.relatedItem.retailPrice}`}</span>
        </div>
      </div>
    )
    // Not on sale  <span className="originPrice">{`${props.relatedItem.retailPrice}`}</span>
  } else {
    return (
      <div className="relatedItem" id={`slide-${props.count}`}>
        <div className="image">
          <img src={props.relatedItem.media.smallImageUrl} ></img>
        </div>
        <div className="info">
          <div className="shoeName">{props.relatedItem.title}</div>
          <div className="category">Basketball Shoe</div>
          <div className="price">{`$${props.relatedItem.retailPrice}`}</div>
        </div>
      </div>
    )
  }

}

export default RelatedItem;
