import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { getActiveUser } from "./LocalStorage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

const PrivateRoute = () => {
  var activeUser = getActiveUser();
  if (activeUser == null) return <Navigate to="/login" />;
  return <Outlet />;
};

export default App;
