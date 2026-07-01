import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Profile = lazy(() => import("./pages/Profile"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Login = lazy(() => import("./pages/Login"));

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<FAQ />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;