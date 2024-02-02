import React from 'react';
import {
  counterState,
  decrement,
  asyncCount,
  increment,
  incrementByAmount,
} from '../../store/slices/counter';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Counter: React.FC = () => {
  const count = useAppSelector(counterState);
  const dispatch = useAppDispatch();

  console.log(count.status);

  const asyncReq = async (): Promise<void> => {
    const res = await dispatch(asyncCount()).unwrap();
    console.log(res);
  };

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={asyncReq}>
          Async Count
        </button>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button aria-label="Increment value" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <span>{count.value}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
