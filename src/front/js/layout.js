import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import Favorites, { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Register from "./pages/SignUp";
import Login from "./pages/login.js";
import Createstory from "./pages/Createstory";
import SearchTheBookClub from "./pages/SearchTheBookClub";
import Search from "./pages/Search";
import Algolia from "./pages/Algolia";
import Autherization from "./pages/Autherization";
import Publish from "./pages/PublishYours";
import TheBookClub from "./pages/TheBookClub";
import Demo from "./pages/demo";
import { NavbarStretch } from "./component/Translator";
import { Jumbotron1 } from "./component/Jumbotron1";
import { Jumbotron2 } from "./component/Jumbotron2";
import { LogoutJumbotron } from "./component/Jumbotron3";
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
          <NavbarStretch />

          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/createUser" />
            <Route element={<Createstory />} path="/Discoveryourword/book" />
            <Route
              element={<Search />}
              path="/auth/searchingthebookclub/home"
            />
            <Route element={<Favorites />} path="/thebookclubfavorites" />
            <Route element={<TheBookClub />} path="/thebookclubhome" />

            <Route
              element={<Autherization />}
              path="/auth/search/thebookclub/home"
            />
            <Route
              element={<SearchTheBookClub />}
              path="/searchthebookclub/home"
            />
            {/* <Route element={<LoginComponent />} path="/" /> */}
            <Route element={<Demo />} path="/auth/search/thebookclub" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Publish />} path="/publishmystory/auth" />
            <Route element={<Algolia />} path="/auth/searcthebook" />
          </Routes>
          <Navbar />
          <Jumbotron1 />
          <LogoutJumbotron />
          <Jumbotron2 />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
