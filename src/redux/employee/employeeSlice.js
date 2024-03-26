import { createSlice } from "@reduxjs/toolkit"
import { employeeData } from "../../dummys/employeeData";

const initialState = {
  employees: employeeData
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {}
})

export default employeeSlice.reducer;