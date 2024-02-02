import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods } from './actions';

const GoodsComponent = () => {
  const dispatch = useDispatch();
  const goods = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <div>
      <h2>Goods</h2>
      <ul>
        {goods.map(good => <li key={good.id}>{good.product_name}</li>)}
      </ul>
    </div>
  );
};

export default GoodsComponent;
