import Button from "@mui/material/Button";
import React from "react";
import "./styles.scss";

function LocationsPage() {
  return (
    <div className="container">
      <Button variant="contained" className="button">
        Bengaluru
      </Button>
      <Button variant="contained" className="button">
        Chennai
      </Button>
      <Button variant="contained" className="button">
        Pune
      </Button>
      <Button variant="contained" className="button">
        Hyderabad
      </Button>
      <Button variant="contained" className="button">
        Delhi
      </Button>
    </div>
  );
}

export default LocationsPage;
