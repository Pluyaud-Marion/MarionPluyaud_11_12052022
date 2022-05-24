import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Lodging from "./pages/Lodging";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Router
 * @returns all route
 */
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        {/* <Route path="/error" element={<Error />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
