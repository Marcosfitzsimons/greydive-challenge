import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import db from "../src/db.json";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Test from "./components/Test";

function App() {
  const [data, setData] = useState(db);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/test/:id" element={<Test data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
