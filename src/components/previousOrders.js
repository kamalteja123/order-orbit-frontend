import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import StoreValue from "./storageClass";

function ViewPreviousOrder() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const headers = {
          token: StoreValue.getJustRestToken(),
        };
        const response = await axios.get(
          "http://localhost:8090/api/getallorders",
          { headers }
        );

        // Filter orders with status "COMPLETED"
        const completedOrders = response.data.filter(
          (order) => order.ostatus === "COMPLETED"
        );

        // Set userData with completed orders
        setUserData(completedOrders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="absolute top-16 text-center z-50" id="comp">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
        {userData.map((user) => (
          <Card key={user.oid} sx={{ minHeight: "280px", width: 250 }}>
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography
                level="title-lg"
                textColor="#000"
                className="text-left"
              >
                Customer Name: {user.cname}
              </Typography>
              <Typography
                level="body1"
                textColor={user.ostatus === "COMPLETED" ? "blue" : "green"}
                className="text-left"
              >
                Status: {user.ostatus}
              </Typography>
              <Typography level="body1" textColor="#000" className="text-left">
                Order Items:
              </Typography>
              <table className="table-auto w-full mt-2">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Item</th>
                    <th className="px-4 py-2">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {user.oitems.split("-").map((item, idx) => {
                    const [name, quantity] = item.split("*");
                    return (
                      <tr key={idx}>
                        <td className="border px-4 py-2">{name}</td>
                        <td className="border px-4 py-2">{quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewPreviousOrder;
