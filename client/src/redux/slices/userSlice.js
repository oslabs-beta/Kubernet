import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    username: null,
    kubernetesAPI: null,
    grafana: {},
  },

  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
