import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from './styles';
import radioOn from '~/assets/radioOn.svg';
import radioOff from '~/assets/radioOff.svg';

function CheckComponent({ handleFunction, value }) {
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    handleFunction(checked);
  }, [checked, handleFunction]);

  return (
    <Style.CheckContainer>
      <Style.CheckBox check={checked === 3} onClick={() => setChecked(3)}>
        <img src={checked === 3 ? radioOn : radioOff} alt="" />
        <span>3 anos</span>
      </Style.CheckBox>{' '}
      <Style.CheckBox check={checked === 2} onClick={() => setChecked(2)}>
        <img src={checked === 2 ? radioOn : radioOff} alt="" />
        <span>1 ano</span>
      </Style.CheckBox>{' '}
      <Style.CheckBox check={checked === 1} onClick={() => setChecked(1)}>
        <img src={checked === 1 ? radioOn : radioOff} alt="" />
        <span>1 mês</span>
      </Style.CheckBox>
    </Style.CheckContainer>
  );
}

export default CheckComponent;

CheckComponent.propTypes = {
  handleFunction: PropTypes.func,
  value: PropTypes.number,
};

CheckComponent.defaultProps = {
  handleFunction: () => {},
  value: 3,
};
