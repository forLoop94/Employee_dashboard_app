import "./App.css";
import Overview from "./components/Overview";
import "react-circular-progressbar/dist/styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Root from "./components/Root";
import Analytics from "./pages/Analytics";
import ForgotPassword from "./pages/ForgotPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Root />}>
        <Route path="/overview" element={<Overview />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassword/:userId/:resetString" element={<ForgotPassword />} />
    </Route>
  )
);

function App() {
  return (
    <main className="lg:bg-gradient-to-r from-pitch to-lilac h-screen lg:p-10">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
