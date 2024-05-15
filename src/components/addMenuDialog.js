import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import StoreValue from "./storageClass";

export default function AddMenuDialog() {
  const [formData, setFormData] = useState({
    mitemPhoto: "",
    mitemName: "",
    mitemPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    if (
      document.getElementById("add-name").value === "" ||
      document.getElementById("add-img").value === "" ||
      document.getElementById("add-price").value === ""
    ) {
      alert("all fields are mandatory");
    } else {
      try {
        await axios.post("/addMenuItem",{
            headers: StoreValue.getRestToken(),
          }, formData);
        alert("Registration successful");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    }
  };
  return (
    <div className="pt-20">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className=" flex col-auto"
      >
        <TextField
          id="add-name"
          label="Item Name"
          name="mitemName"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="add-img"
          label="Item Image"
          name="mitemPhoto"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="add-price"
          label="Item Price"
          name="mitemPrice"
          variant="filled"
          onChange={handleChange}
        />
      </Box>
      <button
        onClick={handleAdd}
        className="absolute bg-nav text-black right-20 bottom-20 rounded-md hover:scale-105 py-1 px-2"
      >
        Add
      </button>
    </div>
  );
}
