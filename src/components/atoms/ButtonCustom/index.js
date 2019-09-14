import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
const ButtonCustom = ({
  children,
  onClick,
  tip,
  btnClassName,
  tipClassName,
}) => {
  return (
    <Tooltip title={tip} className={tipClassName} placement='top'>
      <IconButton onClick={onClick} className={btnClassName}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default ButtonCustom;