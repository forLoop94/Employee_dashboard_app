import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee/employeeSlice";

const store = configureStore({
  reducer: {
    employee: employeeSlice,
  }
})

export default store;