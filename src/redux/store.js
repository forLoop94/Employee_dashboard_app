import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee/employeeSlice";

const store = configureStore({
  reducer: {
    employee: employeeSlice,
  }
})

export default store;

// else {
//   if (response.status === 401) {
//     const res = await fetch(`${baseURL}/auth/refresh`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: {
//         "id": "661ede47972d01f4559ca2ee",
//         "token": `"${refreshToken}"`
//       }
//     });
//     if (response.ok) {
//       const newToken = await res.json();
//       localStorage.setItem('accessToken', newToken);
//     }
//   }
// }