import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import Sidebar from "./components/sidebar/Sidebar";
import AccountView from "./views/account/AccountView";
import ContentManagementView from "./views/content_management/ContentManagementView";
import Dashboard from "./views/dashboard/DashboardView";
import MonitoringView from "./views/monitoring/MonitoringView";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="logo">
          <Logo />
        </div>
        <div className="header">
          <Header />
        </div>
        <div className="sidebarArea">
          <Sidebar />
        </div>
        <div className="mainContentArea">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/content-management"
              element={<ContentManagementView />}
            />
            <Route path="/monitoring" element={<MonitoringView />} />
            <Route path="/account" element={<AccountView />} />
            <Route path="/monitoring/content" element={<MonitoringView />} />
            <Route path="/account/users" element={<ContentManagementView />} />
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
