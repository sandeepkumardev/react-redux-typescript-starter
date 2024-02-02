import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICounter } from '../../types';
import { RootState } from '..';
import { sleep } from '../../utils';

const initialState = {
  status: 'idle',
  value: 0,
} as ICounter;

// async process thunk function
export const asyncCount = createAsyncThunk('asyncCount', async () => {
  // const response = await client.get('/fakeApi/posts');
  // return response.data;

  // For ex:- wait for 2 sec
  await sleep(2000).then();
  return 10;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(asyncCount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(asyncCount.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(asyncCount.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterState = (state: RootState): ICounter => state.counter;

export default counterSlice.reducer;
