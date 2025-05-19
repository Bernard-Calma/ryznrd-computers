import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BuildState {
    processor: string | null;
    motherboard: string | null;
    ram: string | null;
    gpu: string | null;
    storage: string | null;
    powerSupply: string | null;
    case: string | null;
};

const initialState: BuildState = {
    processor: null,
    motherboard: null,
    ram: null,
    gpu: null,
    storage: null,
    powerSupply: null,
    case: null,
};

export const buildSlice = createSlice({
  name: "build",
  initialState,
  reducers: {
    setPart: (
      state, 
      action: PayloadAction<{
        part: keyof BuildState;
        value: string;
      }>
    ) => {
      state[action.payload.part] = action.payload.value;
    },
    clearBuild: () => initialState
  }
})

export const {
  setPart,
  clearBuild
} = buildSlice.actions;

export default buildSlice.reducer;

// Selectors
export const completeBuild = (state: RootState) => 
  Object.values(state.build).every((part) => part !== null);
