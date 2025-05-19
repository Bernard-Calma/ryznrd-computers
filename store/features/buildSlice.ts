import { createSlice } from "@reduxjs/toolkit";

type BuildState = {
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
  }
})

export const {

} = buildSlice.actions;

export default buildSlice.reducer;

