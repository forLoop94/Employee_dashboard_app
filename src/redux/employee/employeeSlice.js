import { createSlice } from "@reduxjs/toolkit"
import { singleEmployee } from "../../dummys/employeeData";

const initialState = {
  employee: singleEmployee,
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {}
})

export default employeeSlice.reducer;