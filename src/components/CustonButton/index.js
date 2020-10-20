import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './styles';

function CustonButton({ highlight, children, onClick }) {
  return (
    <Style.ButtonContainer highlight={highlight} onClick={onClick}>
      {children}
    </Style.ButtonContainer>
  );
}

export default CustonButton;

CustonButton.propTypes = {
  highlight: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

CustonButton.defaultProps = {
  highlight: false,
};
