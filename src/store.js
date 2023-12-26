// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '/node_modules/redux/slices/rocketsSlice';
import missionsReducer from '/node_modules/redux/slices/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;