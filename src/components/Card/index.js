import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './styles';
import planoP from '~/assets/planoP.svg';
import planoM from '~/assets/planoM.svg';
import planoT from '~/assets/planoT.svg';
import CustonButton from '../CustonButton';
import iIcon from '~/assets/i.svg';

const iconSwitch = {
  'Plano P': planoP,
  'Plano M': planoM,
  'Plano Turbo': planoT,
};

function Card({ highlight, values, onClick }) {
  return (
    <Style.CardContainer highlight={highlight}>
      <div className="box-border box-1">
        <img src={iconSwitch[values?.name] || planoP} alt="" />
        <h2>{values?.name}</h2>
      </div>

      <div className="box-border box-2">
        <small className="small-1">
          <span>{values.prices.total}</span>
          <span>
            <b>{values.prices.discount}</b>
          </span>
        </small>
        <small>equivalente a</small>
        <p>
          R$ <b>{values.prices.month}</b>/mês*
        </p>

        <CustonButton highlight={highlight} onClick={() => onClick(values)}>
          Contrate Agora
        </CustonButton>

        <small className="small-2">
          <span>
            <b>1 ano de Domínio Grátis</b>
          </span>
          <span>
            <img src={iIcon} alt="" />
          </span>
        </small>
        <small className="small-3">
          <span>economize {values.prices.economy}</span>
          <span className="green-offer">40% OFF</span>
        </small>
      </div>
      <div className="box-border box-3">
        <ul>
          <li>
            <p>Para 1 site</p>
          </li>
          <li>
            <b>100 GB</b> de Armazenamento
          </li>
          <li>
            <p>
              Contas de E-mail <b>Ilimitadas</b>
            </p>
          </li>
          <li>
            <span>Criador de Sites</span>
            <b>
              <i> Grátis</i>
            </b>
          </li>
          <li>
            <span> Certificado SSL </span>
            <b> Grátis</b> <span>(https)</span>
          </li>
        </ul>
      </div>
    </Style.CardContainer>
  );
}

export default Card;

Card.propTypes = {
  highlight: PropTypes.bool,
  values: PropTypes.shape({
    prices: PropTypes.shape({
      economy: PropTypes.string,
      total: PropTypes.string,
      month: PropTypes.string,
      discount: PropTypes.string,
    }),
    name: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  highlight: false,
};
