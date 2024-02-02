import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IEmailPayload, IProfile } from '../../types';
import { RootState } from '..';

const initialState = {
  name: '',
  email: '',
} as IProfile;

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    handleName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    handleEmail: (state, action: PayloadAction<IEmailPayload>) => {
      const { type, data } = action.payload;
      switch (type) {
        case 'GET_OR_SET_EMAIL':
          state.email = 'fetchFromDB@gmail.com';
          break;

        case 'UPDATE_EMAIL':
          state.email = data || '';
          break;

        default:
          state;
      }
    },
  },
});

export const { handleName, handleEmail } = profileSlice.actions;

export const profileState = (state: RootState): IProfile => state.profile;

export default profileSlice.reducer;
