import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Homepage from "./Pages/Dashboard/Homepage";
import Settings from "./Pages/Dashboard/Settings/Settings";
import Reports from "./Pages/Dashboard/Reports/Reports";
import Customer from "./Pages/Dashboard/Customer/Customer";
import Technician from "./Pages/Dashboard/Technician/Technician";
import Service from "./Pages/Dashboard/Services/Service";
import Layout from "./components/Layout/Layout";
import SpecificService from "./Pages/Dashboard/Services/SpecificService";
import AddOns from "./Pages/Dashboard/Services/AddOns";
import TechnicianDetails from "./Pages/Dashboard/Technician/TechnicianDetails";
import CustomerDetails from "./Pages/Dashboard/Customer/CustomerDetails";
import Booking from "./Pages/Dashboard/Booking/Booking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="Dashboard" element={<Homepage />} />

          <Route path="ServiceManagement" element={<Service />} />

          <Route path="SpecificService" element={<SpecificService />} />

          <Route path="AddOns" element={<AddOns />} />
          <Route path="TechnicianManagement" element={<Technician />} />

          <Route path="TechnicianDetails" element={<TechnicianDetails />} />
          <Route path="CustomerManagement" element={<Customer />} />

          <Route path="CustomerDetails" element={<CustomerDetails />} />
          <Route path="BookingManagement" element={<Booking />} />
          <Route path="Reports" element={<Reports />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
