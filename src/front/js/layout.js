import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Register from "./pages/SignUp";
import Login from "./pages/login.js";
import Createstory from "./pages/Createstory";
import The_Book_Club from "./pages/The_Book_Club";
import TheBookClubFavorites from "./pages/TheBookClubFavorites";
import Search from "./pages/Search";
import Publish from "./pages/PublishYours";

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
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/createUser" />
            <Route element={<Createstory />} path="/Createstory" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<The_Book_Club />} path="/thebookclub" />
            <Route element={<Search />} path="/searchthebookclub" />
            <Route element={<Publish />} path="/publishmystory" />
            <Route element={<TheBookClubFavorites />} path="/favorites" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
