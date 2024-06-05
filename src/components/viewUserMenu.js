import React, { useState, useEffect, useCallback } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import StoreValue from "./storageClass";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";

export default function ViewUserMenu() {
  const [items, setItems] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`/getFullRestaurantInfo/${StoreValue.getRid()}`, {
        headers: { token: StoreValue.getJustUserToken() },
      })
      .then((response) => {
        setResponse(response.data.menus);
        setItems(
          response.data.menus.map((item) => ({
            name: item.mitemName,
            quantity: 0,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  const handleIncrement = useCallback((itemName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const handleDecrement = useCallback((itemName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);

  const handleSubmit = () => {
    let totalCost = 0;
    const formattedItems = items
      .filter((item) => item.quantity > 0)
      .map((item) => {
        const menuItem = response.find(
          (menuItem) => menuItem.mitemName === item.name
        );
        totalCost += menuItem.mitemPrice * item.quantity;
        return `${item.name}*${item.quantity}`;
      })
      .join("-");

    const orderData = {
      oitems: formattedItems,
      ocost: totalCost, // Ensure ocost is a string
    };

    // Send orderData to the server
    axios
      .post(`/placeOrder/${StoreValue.getRid()}`, orderData, {
        headers: { token: StoreValue.getJustUserToken() },
      })
      .then((response) => {
        alert("Order placed successfully!");
      })
      .catch((error) => {
        console.log("There was an error placing the order:", error);
      });
  };

  return (
    <div className="pl-4 pb-4 pt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {response.map((item) => (
        <Card key={item.mitemId} sx={{ width: 320 }}>
          <div>
            <Typography level="title-lg">{item.mitemName}</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={item.mitemPhoto}
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt={`image of ${item.mitemName}`}
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">Price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                &#8377; {item.mitemPrice}
              </Typography>
              <Typography level="body-xs">
                Quantity:{" "}
                {items.find((i) => i.name === item.mitemName)?.quantity || 0}
              </Typography>
            </div>
            <div className="ml-auto">
              <IconButton
                aria-label="decrement"
                variant="plain"
                color="primary"
                size="sm"
                onClick={() => handleDecrement(item.mitemName)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton
                aria-label="increment"
                variant="plain"
                color="primary"
                size="sm"
                onClick={() => handleIncrement(item.mitemName)}
              >
                <AddIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="fixed bottom-16 right-20 bg-nav rounded-md shadow-sm px-1 hover:scale-105">
        <Button
          variant="contained"
          color="primary"
          size="lg"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
