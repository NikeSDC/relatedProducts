import React from 'react';

const RelatedItem = (props) => {
  return (
    <div id={`slide-${props.count}`}>
      {props.count}
    </div>
  )
}

export default RelatedItem;
