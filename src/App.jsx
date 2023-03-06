import React from "react";
import Pickup from "./components/Pickup/Pickup";
import Dealer from "./components/Dealer/Dealer";
import Vendor from "./components/Vendor/Vendor";
import Shop from "./components/Shop/Shop";
import Services from "./components/Services/Services";
import About from "./components/About/About_index";
import DownloadPage from "./components/DownloadPage/DownloadPage";
import Contact from "./components/Contact/ContactIndex";
import Home from "./components/Home/Home_index";
import { Routes, Route } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pickup" element={<Pickup />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/downloadpage" element={<DownloadPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route />
        </Routes>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
