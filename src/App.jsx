import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PricingPage from "./components/pricing/PricingPage";
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
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
