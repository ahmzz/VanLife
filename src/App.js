import "./App.css";
import Vans from "./Pages/Vans";
import About from "./Components/About";
import Home from "./Components/Home";
import VanDetails from "./Pages/VanDetails";
import Dashboard from "./Components/Dashboard";
import Income from "./Components/Income";
import Reviews from "./Components/Reviews";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import HostVanDetail from "./Components/HostVanDetail";
import HostVanInfo from "./Components/HostVanInfo";
import HostVanPhotos from "./Components/HostVanPhotos";
import HostVanPricing from "./Components/HostVanPricing";
import HostVans from "./Components/HostVans";
import "./server.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo/>}/>
                <Route path="pricing" element={<HostVanPricing/>}/>
                <Route path="photos" element={<HostVanPhotos/>}/>
              </Route>
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
