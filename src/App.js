import "./App.css";
import Header from "./components/Header/Header";
import { useContext } from "react";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import { AuthContext } from "./context/AuthContext";
import ErrorPage from "./pages/Error";
import Write from "./pages/Write/Write";
import SinglePage from "./pages/SinglePage/SinglePage";
function App() {
  const { currentUser } = useContext(AuthContext);

  const AuthRedirect = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };
  const AuthRequire = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <div className="min-w-screen min-h-screen w-screen h-screen bg-[#feffff] scrollbar-hide pb-16 justify-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/write"
            element={
              <AuthRequire>
                <Write />
              </AuthRequire>
            }
          />
          <Route
            path="/post/:postId"
            element={
              <AuthRequire>
                <SinglePage />
              </AuthRequire>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRedirect>
                <Login />
              </AuthRedirect>
            }
          />
          <Route
            path="/register"
            element={
              <AuthRedirect>
                <SignUp />
              </AuthRedirect>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
