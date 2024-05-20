import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import StoreValue from "./storageClass";

function ViewOrder() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const headers = {
          token: StoreValue.getJustRestToken(),
        };
        const response = await axios.get(
          "http://localhost:8090/api/ordersAtRestaurantDashboard",
          { headers }
        );

        // Set userData with response data
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const handleComplete = async (orderId) => {
    try {
      await axios.put(
        `http://localhost:8090/api/updateOStatusToCompleted/${orderId}`,
        {},
        {
          headers: {
            token: StoreValue.getJustRestToken(),
          },
        }
      );
      alert("Order completed successfully");
      // Update the order status in the frontend
      setUserData((prevData) =>
        prevData.map((order) =>
          order.oid === orderId ? { ...order, ostatus: "COMPLETED" } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="absolute top-16 text-center z-50" id="comp">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
        {userData
          .filter((user) => user.ostatus === "ONGOING")
          .map((user) => (
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
                {user.ostatus !== "COMPLETED" && (
                  <button
                    onClick={() => handleComplete(user.oid)}
                    className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
                  >
                    Complete
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default ViewOrder;
