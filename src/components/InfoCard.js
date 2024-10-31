// InfoCard.js
import React from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import userimage from "../assets/UserImage.png"
const InfoCard = () => {
  return (
    <Card style={{ width: "200px", height: "350px", padding: "10px" }}>
      {/* Top Section with Profile Image and Supplier Name */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <img
          src={userimage} // Replace with actual image URL
          alt="Profile"
          style={{ borderRadius: "50%", marginRight: "10px" }}
        />
        <div>
          <div style={{ fontWeight: "bold" }}>Supplier Name</div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>290</div>
        </div>
      </div>

      {/* Middle Section */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <ShoppingCartOutlined style={{ marginRight: "5px" }} /> 209
        </div>
        <div>Product Available</div>
        <div style={{ marginLeft: "auto", color: "#fff" }}>→</div>
      </div>

      {/* Bottom Section for Profit Target */}
      <div style={{ marginTop: "10px" }}>
        <div style={{ fontWeight: "bold" }}>Profit Target</div>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>40%</div>
        <div style={{ width: "100%", height: "5px", backgroundColor: "#000", marginTop: "5px" }}></div>
      </div>
    </Card>
  );
};

export default InfoCard;
