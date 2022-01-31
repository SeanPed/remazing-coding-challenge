import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import SidebarTest from "./components/sidebar/sidebartest/SidebarTest";
import ContentManagement from "./views/content-management/contentManagement";
import Dashboard from "./views/dashboard/dashboard";
import MonitoringContentView from "./views/monitoring/monitoring";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="sidebarArea">
          <SidebarTest/>
        </div>
        <div className="mainContentArea">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/content-management" element={<ContentManagement />} />
            <Route path="/monitoring" element={<MonitoringContentView />} />
            <Route path="/account" element={<div>Account Area!</div>} />
            <Route
              path="/monitoring/content"
              element={<div>Monitoring Content Area</div>}
            />
            <Route
              path="/account/users"
              element={<div>Account Users Area!</div>}
            />
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
