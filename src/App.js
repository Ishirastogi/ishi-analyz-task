import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Home from "./pages/Home/Home";
import NewTicket from "./pages/NewTicket/NewTicket";
import MyTicket from "./pages/MyTicket/MyTicket";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/dashboard" element={user ? <Home /> : <Login />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="/my-ticket" element={<MyTicket />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
