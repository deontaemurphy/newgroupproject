import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Profile from "./pages/profile";
import Categories from "./pages/categories";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/login.js";
import Createstory from "./pages/Createstory";

//In the console it said sign up on line 26 was undefined bc it was Not imported in the file
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/" />
            <Route element={<SignUp />} path="/createaccount" />
            <Route element={<Categories />} path="/categories" />
            <Route element={<Createstory />} path="/Createstory" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
