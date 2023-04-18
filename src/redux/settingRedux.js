import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    showUpdate: false,
  },
  reducers: {
    updateShowUpdate: (state, action) => {
      state.showUpdate = action.payload ;
    }
  }
});

export const {
  updateShowUpdate,
} = settingSlice.actions;

export default settingSlice.reducer;