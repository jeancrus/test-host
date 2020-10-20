import React from 'react';
import iconSelect from '~/assets/iconSelect.svg';
import leftImage from '~/assets/leftImage.svg';
import rightImage from '~/assets/rightImage.svg';
import iconCheck from '~/assets/iconCheck.svg';
import * as Style from './styles';

function SubHeader() {
  return (
    <Style.SubHeaderContainer className="sub-header">
      <div className="box-blue">
        <div className="text-box">
          <b>Hospedagem de Sites</b>
          <h1>
            Tenha uma hospedagem de sites estável e evite perder visitantes
            diariamente
          </h1>
          <p>
            <span>
              <img src={iconCheck} alt="" /> 99,9% de disponibilidade: seu site
              sempre no ar
            </span>
          </p>
          <p>
            <span style={{ marginRight: 10 }}>
              <img src={iconCheck} alt="" /> Suporte 24h, todos os dias
            </span>
            <span>
              <img src={iconCheck} alt="" /> Painel de Controle cPanel
            </span>
          </p>
          <img src={iconSelect} alt="" className="select-icon" />
        </div>
      </div>{' '}
      <img src={rightImage} alt="" className="left-image" />
      <div id="wave-container">
        <div id="wave" />
      </div>
      <img src={leftImage} alt="" className="right-image" />
    </Style.SubHeaderContainer>
  );
}

export default SubHeader;
