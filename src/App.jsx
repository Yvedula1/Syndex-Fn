import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Landing from "./views/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import NotFoundPage from "./views/404page";
import ForbiddenPage from "./views/protected/403page";
//pages auth
import Discover from "./views/protected/Discover";
//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideNav from "./components/dash/SideNav";

function App() {
  const google_id = import.meta.env.VITE_GOOGLE_CLIENT_AUTH_ID;
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route
                    path="/register"
                    element={
                      <GoogleOAuthProvider clientId={google_id}>
                        <SignUp />
                      </GoogleOAuthProvider>
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <GoogleOAuthProvider clientId={google_id}>
                        <Login />
                      </GoogleOAuthProvider>
                    }
                  />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/dashboard/*"
            element={
              <>
                <SideNav />
                <Routes>
                  <Route path="/discover" element={<Discover />} />
                  <Route path="*" element={<ForbiddenPage />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
