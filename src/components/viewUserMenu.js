import React, { useState, useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";

export default function ViewUserMenu() {
  const [items, setItems] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/restdata")
      .then(function (response) {
        setResponse(response.data);
        setItems(
          response.data.map((item) => ({ name: item.mitemName, quantity: 0 }))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleIncrement = (itemName) => {
    const updatedItems = items.map((item) =>
      item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const handleDecrement = (itemName) => {
    const updatedItems = items.map((item) =>
      item.name === itemName && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItems(updatedItems);
  };

  const handleSubmit = () => {
    const formattedItems = items
      .filter((item) => item.quantity > 0)
      .map((item) => `${item.name}*${item.quantity}`)
      .join("-");
     alert("Selected items: " + formattedItems);
  };

  return (
    <div className="pl-4 pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
      {response.map((item) => (
        <Card key={item.id} sx={{ width: 320}}>
          <div>
            <Typography level="title-lg">{item.mitemName}</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={item.mitemPhoto}
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt="menu image"
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">Price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                Rs {item.mitemPrice}
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
        <Button variant="contained" color="primary" size="lg" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
