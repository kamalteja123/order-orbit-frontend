import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import StoreValue from "./storageClass";

export default function AddMenuDialog() {
  const [formData, setFormData] = useState({
    img: null,
    mitemName: "",
    mitemPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (
      formData.mitemName === "" ||
      formData.mitemPrice === "" ||
      formData.img === null
    ) {
      alert("All fields are mandatory");
    } else {
      try {
        const headers = {
          token: StoreValue.getRestToken(),
          mitemName: formData.mitemName,
          mitemPrice: formData.mitemPrice,
          // Assuming this returns the authentication token
        };

        const formDataToSend = new FormData();
        formDataToSend.append("img", formData.img);

        await axios.post("/addMenuItem", formDataToSend, { headers });

        // Reset the form data after successful addition
        setFormData({
          img: null,
          mitemName: "",
          mitemPrice: "",
        });

        alert("Menu item added successfully");
      } catch (error) {
        console.error("Error adding menu item:", error);
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
        className="flex flex-col items-center"
      >
        <TextField
          id="add-name"
          label="Item Name"
          name="mitemName"
          variant="filled"
          value={formData.mitemName}
          onChange={handleChange}
        />
        <TextField
          id="add-price"
          label="Item Price"
          name="mitemPrice"
          variant="filled"
          value={formData.mitemPrice}
          onChange={handleChange}
        />
        <input
          className="mt-4"
          type="file"
          id="add-img"
          name="img"
          accept="image/*"
          onChange={handleFileChange}
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
