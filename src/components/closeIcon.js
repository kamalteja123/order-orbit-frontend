import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useNavigate } from "react-router-dom";

function CloseIcon() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/home");
  };
  return (
    <div onClick={handleClose} className="absolute top-20 right-20 z-50 bg-white rounded-3xl bg-opacity-100 hover:scale-105">
      <IconButton aria-label="delete" size="small">
          <CloseRoundedIcon />
      </IconButton>
    </div>
  );
}

export default CloseIcon;
