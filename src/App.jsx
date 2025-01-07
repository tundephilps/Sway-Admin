import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Homepage from "./Pages/Dashboard/Homepage";
import Settings from "./Pages/Dashboard/Settings";
import Reports from "./Pages/Dashboard/Reports";
import Booking from "./Pages/Dashboard/Booking";
import Customer from "./Pages/Dashboard/Customer";
import Technician from "./Pages/Dashboard/Technician";
import Service from "./Pages/Dashboard/Service";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="Dashboard" element={<Homepage />} />

          <Route path="ServiceManagement" element={<Service />} />
          <Route path="TechnicianManagement" element={<Technician />} />
          <Route path="CustomerManagement" element={<Customer />} />
          <Route path="BookingManagement" element={<Booking />} />
          <Route path="Reports" element={<Reports />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
