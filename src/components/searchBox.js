import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import StoreValue from "./storageClass";

function SearchBox() {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  function findIdByName(name) {
    for (let i = 0; i < allRestaurant.length; i++) {
      if (allRestaurant[i].rname === name) {
        return allRestaurant[i].rid;
      }
    }
    return "ID not found"; // Return this if name is not found
  }
  useEffect(() => {
    axios
      .get("/getAllRestaurants", {
        headers: StoreValue.getToken(),
      })
      .then(function (response) {
        setAllRestaurant(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const restName = event.target.previousSibling
      .querySelectorAll("div")[0]
      .querySelectorAll("input")[0].value;
    const rid = findIdByName(restName);
    StoreValue.setRid(rid);
    setShowMenu(true);
  };

  return (
    <div id="searchbox">
      <Autocomplete
        className="mx-auto absolute z-50 top-1/4 left-1/4 bg-white bg-opacity-70 rounded-lg p-2 drop-shadow-xl"
        id="country-select-demo"
        sx={{ width: "50vw" }}
        options={allRestaurant}
        autoHighlight
        getOptionLabel={(option) => option.rname}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <div>
              <div>
                <b>{option.rname}</b>
              </div>
              {option.raddress}
              <br />
              Phone:{option.rphoneNum}
            </div>
          </Box>
        )}
        renderInput={(params) => (
          <Box sx={{ position: "relative" }}>
            <TextField
              {...params}
              label="Choose a Restaurant"
              inputProps={{
                ...params.inputProps,
                // autoComplete: "off", // disable autocomplete and autofill
              }}
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className=" absolute top-0 hover:cursor-pointer -right-32 translate-y-2 bg-nav  text-black font-medium  px-6 py-2 rounded-md hover:scale-105"
            >
              Submit
            </button>
          </Box>
        )}
      />
    </div>
  );
}
export default SearchBox;
