/* eslint-disable react/prefer-stateless-function */
// import React, { Component } from "react";
// import logo from "./logo.svg";
import React from "react";
import "./App.css";

import FeedTabs from "./components/FeedTabs";
import Greeting from "./components/Greeting";
import HeaderNav from "./components/HeaderNav";
import PostCard from "./components/PostCard";
import LoginRegDrop from "./components/LoginRegDrop";
// Import the useAuthTokenStore hook.
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";
import { BrowserRouter } from "react-router-dom";

function App() {
  // ---- USER AUTHENTICATION ---- //
  // Use wherever we need to check if user is logged in or not.
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();
  // isAuthenticated is true / false of if user is logged in
  // for components below can show if !isAuthenticated or if isAuthenticated
  const isAuthenticated = useIsAuthenticated();
  // ---- END OF USER AUTHENTICATION VARIABLES ---- //

  return (
    <BrowserRouter>
      <div className="loginPage">
        <div className="container-fluid">
          <div className="row">
            {isAuthenticated ? (
              <h1>You are logged in!</h1>
            ) : (
              <h1>You are not logged in!</h1>
            )}
            <HeaderNav />

            <Greeting />

            <FeedTabs />

            <div className="container">
              <div className="loginCardCluster">
                <LoginRegDrop />

                <PostCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
