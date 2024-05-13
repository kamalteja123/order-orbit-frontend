import React from "react";
import Alert from "@mui/material/Alert";

function BasicAlerts({ alert, index }) {
  return (
    <div className="absolute top-20 right-1/2 translate-x-1/2 z-50">
      <Alert key={index} severity={alert.severity}>
        {alert.message}
      </Alert>
    </div>
  );
}
export default BasicAlerts;
