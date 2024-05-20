import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import StoreValue from "./storageClass";

export default function UpdateMenuDialog() {
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (formData.mitemName === "" || formData.mitemPrice === "" || formData.img === null) {
      alert("All fields are mandatory");
    } else {
      try {
        const headers = {
          mitemName: formData.mitemName,
          mitemPrice: formData.mitemPrice,
          token:StoreValue.getRestToken(), // Assuming this returns the authentication token
        };

        const formDataToSend = new FormData();
        formDataToSend.append("img", formData.img);
        console.log(StoreValue.getRid());
        await axios.post(`/updateMenuItem/${StoreValue.getRid()}`, formDataToSend, { headers });//the item id should be changed how?
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
          onChange={handleChange}
        />
        <TextField
          id="add-price"
          label="Item Price"
          name="mitemPrice"
          variant="filled"
          onChange={handleChange}
        />
        <input
          type="file"
          id="add-img"
          name="img"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Box>
      <button
        onClick={handleUpdate}
        className="absolute bg-nav text-black right-20 bottom-20 rounded-md hover:scale-105 py-1 px-2"
      >
        Update
      </button>
    </div>
  );
}
