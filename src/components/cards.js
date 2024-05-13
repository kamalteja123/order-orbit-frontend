import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Mission from "../assests/mission.jpg";
import Contactus from "../assests/contactus.jpg";

function MediaCard() {
  return (
    <div className="flex row-auto gap-10 m-auto mb-10 ">
      {" "}
      <div className="pt-10 hover:scale-105 ">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={Mission} title="mission" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mission
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our mission is to simplify the restaurant pre-booking process,
              empowering both diners and establishments to seamlessly connect
              and enhance the dining experience.
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
      <div className="pt-10 hover:scale-105 ">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={Contactus} title="mission" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" className="w-80 h-20">
              <a href="mailto:0dJrF@example.com">e-mail: <span className="hover:text-blue-500">orderflow@example.com</span></a><br/>
              <a href="tel:123456789"> Phone: <span className="hover:text-blue-500">9876543210</span></a>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}

export default MediaCard;
