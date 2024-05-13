import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GetRestaurantMenu from "./getRestaurantMenu";

export default function UpdateMenuDialog() {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      {selected ? (
        <GetRestaurantMenu />
      ) : (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className="absolute top-20"
        >
          <TextField id="item-name" label="Item Name" variant="filled" />
          <TextField id="item-img" label="Item Image" variant="filled" />
          <TextField id="item-price" label="Item Price" variant="filled" />
        </Box>
      )}
    </div>
  );
}
