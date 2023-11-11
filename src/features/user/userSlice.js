import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// async function fetchAddress() {}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
});

//geting  username value from localeStorage
//we setted this value in UserName.jsx
// const storedValue = localStorage.getItem("username");

//if we have username value form localStorage we gonna set initialState.username to that username from local storage

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddress.pending),
      (state, action) => {
        state.status = "loading";
      };
    builder.addCase(fetchAddress.fulfilled),
      (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.adrees = action.payload.address;
      };
    builder.addCase(fetchAddress.rejected),
      (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      };
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
