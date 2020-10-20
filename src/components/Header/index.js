import React from 'react';

import * as Style from './styles';
import hostIcon from '~/assets/hostgator-logo.svg';

function Header() {
  return (
    <Style.HeaderContainer>
      <div>
        <img src={hostIcon} alt="" />
      </div>
    </Style.HeaderContainer>
  );
}

export default Header;
