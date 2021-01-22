import React from 'react';

const RelatedItem = (props) => {
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

export default RelatedItem;
