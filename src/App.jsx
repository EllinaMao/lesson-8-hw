import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import LocationLogger from "./components/LocationLogger";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
////////////////////////////////////////////////////////////////////////

import { FormProvider } from "./components/UI/FormSteps/FormContext";
import FormStep1Page from "./pages/FormStep1Page";
import FormStep2Page from "./pages/FormStep2Page";
import FormStep3Page from "./pages/FormStep3Page";
import Summary from "./pages/Summary";

import "./App.css";
const App = () => {
  return (
    <>
      <FormProvider>
        <Header />
        <LocationLogger />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form-step-1" element={<FormStep1Page />} />
          <Route path="/form-step-2" element={<FormStep2Page />} />
          <Route path="/form-step-3" element={<FormStep3Page />} />
          <Route path="/summary" element={<Summary/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </FormProvider>
    </>
  );
};

export default App;
