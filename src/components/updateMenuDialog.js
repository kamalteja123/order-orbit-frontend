import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import StoreValue from "./storageClass";

export default function UpdateMenuDialog() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    img: null,
    mitemName: "",
    mitemPrice: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/getAllMenuItems", {
        headers: { token: StoreValue.getJustRestToken() },
      })
      .then(function (response) {
        setMenuItems(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("error at get:" + error);
      });
  }, []);

  const handleReload = async () => {
    setOpen(false); 
    try {
      const response = await axios.get(
        "http://localhost:8090/api/getAllMenuItems",
        {
          headers: { token: StoreValue.getJustRestToken() },
        }
      );
      setMenuItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const handleUpdate = async (e) => {
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
          mitemName: formData.mitemName,
          mitemPrice: formData.mitemPrice,
          token: StoreValue.getRestToken(),
        };

        const formDataToSend = new FormData();
        formDataToSend.append("img", formData.img);
        console.log(selectedItem.mitemId);
        await axios.put(
          `/updateMenuItem/${selectedItem.mitemId}`, // Assuming this route accepts item ID as a parameter
          formDataToSend,
          { headers }
        );
        alert("Menu item updated successfully");
        handleReload();
      } catch (error) {
        console.error("Error updating menu item:", error);
      }
    }
  };

  return (
    <div>
      {!open ? (
        <div className="absolute top-16 text-center z-50" id="comp">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 ">
            {menuItems.map((item) => (
              <Card
                key={item.mitemId}
                sx={{ minHeight: "280px", width: 250 }}
                onClick={() => {
                  setSelectedItem(item);
                  setOpen(true);
                }}
              >
                <CardCover>
                  <img src={item.mitemPhoto} loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography
                    level="title-lg"
                    textColor="#fff"
                    className="text-left"
                  >
                    {item.mitemName}
                  </Typography>
                  <Typography
                    textColor="neutral.300"
                    className="text-left"
                  >
                    &#8377; {item.mitemPrice}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
