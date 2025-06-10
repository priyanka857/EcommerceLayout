import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
        <Container>
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/Signup" element={<SignUp />}></Route>
          </Routes>
        </Container>

        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
