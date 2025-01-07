import React from "react";
import Navbar from "../../components/Dashboard/Navbar";

import DashboardHeader from "../../components/Dashboard/Header";
import DashboardStats from "../../components/Dashboard/DashboardStats";
import AvaliableTechnicians from "../../components/Dashboard/AvaliableTechnicians";
import BookingsTable from "../../components/Dashboard/BookingTable";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <DashboardHeader />
      <DashboardStats />
      <AvaliableTechnicians />
      <BookingsTable />
    </div>
  );
};

export default Homepage;
