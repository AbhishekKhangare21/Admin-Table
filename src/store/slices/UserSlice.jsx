import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // deleteUser(state, action) {
    //   return [];
    // },
  },
  //assume that u are in some other slice like AdminSlice

  extraReducers(builder) {
    builder.addCase(deleteUser, () => {
      return [];
    });
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
