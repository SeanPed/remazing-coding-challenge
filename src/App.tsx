import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import AccountView from "./views/account/account";
import ContentManagementView from "./views/content-management/contentManagement";
import Dashboard from "./views/dashboard/dashboard";
import MonitoringView from "./views/monitoring/monitoring";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="sidebarArea">
          <Sidebar />
        </div>
        <div className="mainContentArea">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/content-management" element={<ContentManagementView />} />
            <Route path="/monitoring" element={<MonitoringView />} />
            <Route path="/account" element={<AccountView />} />
            <Route
              path="/monitoring/content"
              element={<MonitoringView />}
            />
            <Route
              path="/account/users"
              element={<ContentManagementView />}
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
