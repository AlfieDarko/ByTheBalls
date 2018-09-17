import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const IconWrapper = props => {
  if (props.iconName == 'minus') {
    return (
      <i {...props}>
        <FontAwesomeIcon {...props} icon={faMinusSquare} />
      </i>
    );
  } else if (props.iconName == 'plus') {
    return (
      <i {...props}>
        <FontAwesomeIcon {...props} icon={faPlusSquare} />
      </i>
    );
  }
};
<div />;
export default IconWrapper;
