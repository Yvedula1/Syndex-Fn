import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Landing from "./views/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import NotFoundPage from "./views/404page";
//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* normal routes no special access */}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
