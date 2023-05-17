import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calendar from "./pages/Calendar/Calendar";
import DataGrid from "./pages/DataGrid/DataGrid";
import AqMap from "./pages/AqMap/AqMap";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="aqMap" element={<AqMap />} />
            <Route path="users" element={<DataGrid />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
