import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Atlante from "./pages/Atlante";
import Recrew from "./pages/Recrew";
import NotFound from "./pages/NotFound";
// Display
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  document.title = "Atlantis' Quest";
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path={`/atlantes/:id`} element={<Atlante />} />
        <Route path="/recrew" element={<Recrew />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
