import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/Sidebar";
import ContentManagement from "./views/content-management/contentManagement";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="sidebarArea">
          <SideBar />
        </div>
        <div className="mainContentArea">
          <Routes>
            <Route path="/" element={<div>Dashboard Area</div>} />
            <Route
              path="/content-management"
              element={<ContentManagement/>}
            />
            <Route path="/monitoring" element={<div>Monitoring Area</div>} />
            <Route path="/account" element={<div>Account Area!</div>} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
