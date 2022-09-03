import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./donor/Login";
import Header from "../components/Header";
import Home from "./home/DonorHome";
import Donor from "./donor/Doner";
import NewDonor from "./donor/NewDonorRegister";
import ForgotPassword from "./donor/ForgotPassword";
import PageNotFound from "../components/PageNotFound";
import "../scss/Style.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Donor" element={<Donor />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/NewDonor" element={<NewDonor />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
