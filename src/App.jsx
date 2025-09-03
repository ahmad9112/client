import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PricingPage from "./components/pricing/PricingPage";
import PricingPlans from "./components/pricing/PricingPlans";
import StartupOffer from "./components/pricing/StartupOffer";
import Testimonials from "./components/pricing/Testimonials";
import FAQ from "./components/pricing/FAQ.jsx";
import ImpactMetrics from "./components/pricing/ImpactMetrics"; // ✅ fixed import
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <PricingPage />
              <PricingPlans />
              <StartupOffer />
              <Testimonials />
              <FAQ />
              <ImpactMetrics />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
