import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Header from "./components/Header";
import DonarPage from "./pages/DonarPage";
import DonarDetailPage from "./pages/DonarDetailPage";
import NewDonor from "./components/auth/NewDonorRegister";
import ForgotPassword from "./components/auth/ForgotPassword";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<DonarPage />} />
          <Route path="/Donor" element={<DonarDetailPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/NewDonor" element={<NewDonor />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
