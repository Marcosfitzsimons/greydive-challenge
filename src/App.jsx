import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import db from "../src/db.json";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Test from "./components/Test";

function App() {
  const location = useLocation();
  const [data, setData] = useState(db);

  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/test/:id" element={<Test data={data} />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
