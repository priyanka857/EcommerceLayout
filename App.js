import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container} from 'react-bootstrap' 
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignupScreen from "./components/Screens/SignupScreen";
import LoginScreen from "./components/Screens/LoginScreen";
import ProductDetails from "./components/Screens/ProductDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/product/:id" element={<ProductDetails match />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={<SignupScreen />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}