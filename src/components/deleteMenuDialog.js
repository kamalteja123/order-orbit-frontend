import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import StoreValue from "./storageClass";

export default function DeleteMenuDialog() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get("/getAllMenuItems", {
        headers: { token: StoreValue.getJustRestToken() },
      });
      setMenuItems(response.data);
    } catch (error) {
      console.log("Error fetching menu items:", error);
    }
  };

  const handleDelete = async (mitemId) => {
    try {
      await axios.delete(`/deleteMenuItem/${mitemId}`, {
        headers: { token: StoreValue.getRestToken() },
      });
      alert("Menu item deleted successfully");
      fetchMenuItems(); // Refresh menu items after deletion
    } catch (error) {
      console.error("Error deleting menu item:", error);
      alert("Failed to delete menu item. Please try again later.");
    }
  };

  return (
    <div className="absolute top-16 text-center z-50" id="comp">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 ">
        {menuItems.map((item) => (
          <Card
            key={item.mitemId}
            sx={{ minHeight: "280px", width: 250 }}
            onClick={() => setSelectedItem(item)}
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
              <Typography textColor="neutral.300" className="text-left">
                &#8377; {item.mitemPrice}
              </Typography>
            </CardContent>
            <button
              className="bg-red-500 text-white px-4 py-1 rounded-md z-50"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click event
                handleDelete(item.mitemId);
              }}
            >
              Delete
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
