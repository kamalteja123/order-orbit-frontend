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
    if (formData.mitemName === "" || formData.mitemPrice === "" || formData.img === null) {
      alert("All fields are mandatory");
    } else {
      try {
        const headers = {
          token :StoreValue.getRestToken(),
          mitemName: formData.mitemName,
          mitemPrice: formData.mitemPrice,
           // Assuming this returns the authentication token
        };
        // console.log(StoreValue.getRestToken());
        // console.log(headers);

        const formDataToSend = new FormData();
        formDataToSend.append("img", formData.img);
        // console.log(formDataToSend);
        await axios.post("/addMenuItem", formDataToSend, { headers });
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
        className=" flex col-auto"
      >
        <TextField
          id="add-name"
          label="Item Name"
          name="mitemName"
          variant="filled"
          onChange={handleChange}
        />
        <input
          type="file"
          id="add-img"
          name="img"
          onChange={handleFileChange}
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
