import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Button, Box } from "@mui/material";
import { SettingsRounded, LocationOnRounded } from "@mui/icons-material";
import "./styles.scss";

import BackArrowIcon from "../../assets/Group 7003.svg";
import HamIcon from "../../assets/Group 7017.svg";
import MembersPage from "./Members";
import LocationsPage from "./Locations";

function DashboardPage() {
  const navigate = useNavigate();
  const [tab, settab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuItems = [
    { name: "Locations", icon: LocationOnRounded },
    { name: "Settings", icon: SettingsRounded },
  ];
  function handleLogout() {
    localStorage.clear();
    navigate("/login", { replace: true });
  }

  return (
    <div className="dashboard-page">
      <menu className={`${!isMenuOpen ? "close" : ""}`}>
        <div className="menu-items">
          <Box height={160}></Box>
          <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <img src={BackArrowIcon} alt="back button" className="icon" />
            ) : (
              <img src={HamIcon} alt="ham button" className="icon" />
            )}
          </IconButton>

          {menuItems.map((item, i) => (
            <div
              title={item.name}
              key={item.name}
              className={`menu-item ${tab === i && "active"}`}
              onClick={() => settab(i)}
            >
              <item.icon sx={{ mr: 1 }} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="userInfo">
          <div className="avatar">
            <p style={{ color: "white" }}>C</p>
          </div>
          <div className="info">
            <p className="name">Chetan N</p>
            <Button
              variant="contained"
              sx={{
                padding: "0 4px",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={handleLogout}
            >
              <p style={{ fontSize: "10px" }}>LOG OUT</p>
            </Button>
          </div>
        </div>
      </menu>
      <main>
        {tab === 0 && <LocationsPage />}
        {tab === 1 && <MembersPage />}
      </main>
    </div>
  );
}

export default DashboardPage;
