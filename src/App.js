import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "../src/pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "../src/pages/Home/Home";
import NotFound from "../src/pages/Not-Found/NotFound";
import Dashboard from "../src/pages/Dashboard/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NotFound />} />
        </Route>

     
      </Routes>
    </Router>
  );
}

export default App;
