import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Header from "./components/Header";
import DonarPage from "./pages/DonarPage";
import DonarDetailPage from "./pages/DonarDetailPage";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import PageNotFound from "./pages/PageNotFound";
import PrivateOutlet from "./ProtectedRoute/PrivateOutlet";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<DonarPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="Donor" element={<DonarDetailPage />} />
            <Route path="About" element={<AboutPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
