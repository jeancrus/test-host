import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '~/components/Card';
import CheckComponent from '~/components/CheckComponent';
import Header from '~/components/Header';
import Loader from '~/components/Loader';
import history from '~/services/history';
import { getPaymentRequest } from '~/store/modules/app/actions';
import { formatPrice } from '~/utils/format';

import * as Style from './styles';
import SubHeader from './SubHeader';

function Home() {
  const [value, setValue] = useState(3);
  const dispatch = useDispatch();

  const data = useSelector((state) =>
    state?.app?.values?.map((item) =>
      item.name === 'Plano M' ? { ...item, selected: true } : item
    )
  );
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(getPaymentRequest());
  }, [dispatch]);

  function handleFunction(number) {
    setValue(number);
  }

  const presentPlan = useMemo(
    () =>
      data.map((item) => {
        if (value === 1)
          return {
            ...item,
            name: item.name,
            id: item.id,
            prices: {
              ...item.cycle.monthly,
              total: formatPrice(item.cycle.monthly.priceOrder),
              discount: formatPrice(
                item.cycle.monthly.priceOrder -
                  (item.cycle.monthly.priceOrder / 100) * 40
              ),
              month: Number(
                item.cycle.monthly.priceOrder -
                  (item.cycle.monthly.priceOrder / 100) * 40
              ).toFixed(2),
              economy: formatPrice(
                item.cycle.monthly.priceOrder -
                  (item.cycle.monthly.priceOrder -
                    (item.cycle.monthly.priceOrder / 100) * 40)
              ),
            },
          };
        if (value === 2)
          return {
            ...item,
            name: item.name,
            id: item.id,
            prices: {
              ...item.cycle.annually,
              total: formatPrice(item.cycle.annually.priceOrder),
              discount: formatPrice(
                item.cycle.annually.priceOrder -
                  (item.cycle.annually.priceOrder / 100) * 40
              ),
              month: Number(
                item.cycle.annually.priceOrder / item.cycle.annually.months
              ).toFixed(2),
              economy: formatPrice(
                item.cycle.annually.priceOrder -
                  (item.cycle.annually.priceOrder -
                    (item.cycle.annually.priceOrder / 100) * 40)
              ),
            },
          };
        if (value === 3)
          return {
            ...item,
            name: item.name,
            id: item.id,
            prices: {
              ...item.cycle.triennially,
              total: formatPrice(item.cycle.triennially.priceOrder),
              discount: formatPrice(
                item.cycle.triennially.priceOrder -
                  (item.cycle.triennially.priceOrder / 100) * 40
              ),
              month: Number(
                item.cycle.triennially.priceOrder /
                  item.cycle.triennially.months
              ).toFixed(2),
              economy: formatPrice(
                item.cycle.triennially.priceOrder -
                  (item.cycle.triennially.priceOrder -
                    (item.cycle.triennially.priceOrder / 100) * 40)
              ),
            },
          };
        return item;
      }),
    [value, data]
  );

  async function postClick(itemValue) {
    const newValue = {
      3: 'triennially',
      2: 'annually',
      1: 'monthly',
    };
    try {
      history.push(
        `/?a=add&pid=${itemValue.id}&billingcycle=${newValue[value]}&promocode=${itemValue.name}`
      );
    } catch (error) {
      console.log('postClick -> error', error);
    }
  }

  return (
    <Style.HomeContainer>
      <Loader active={loading} />
      <Header />
      <SubHeader />
      <div className="box-choose">
        <small>Quero pagar a cada:</small>
        <CheckComponent value={value} handleFunction={handleFunction} />
      </div>

      <div className="box-cards">
        <div>
          {!!presentPlan?.length &&
            presentPlan.map((item) => (
              <Card
                highlight={item.selected}
                key={item.id}
                values={item}
                onClick={postClick}
              />
            ))}

          <Link to="/">*Confira as condições da promoção</Link>
        </div>
      </div>
    </Style.HomeContainer>
  );
}

export default Home;
