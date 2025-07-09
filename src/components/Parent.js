import React from "react";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import LikeButton from "./like";
import { ThemeContext } from "./Theme";

const Parent = () => {
  const {theme, toggletheme} = useContext(ThemeContext);
  console.log("Current Theme:", theme);
    const containerStyle = {
    backgroundColor: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    padding: "20px",
    minHeight: "100vh"
  };
  return (
    <div style={containerStyle}>
        <button onClick={toggletheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      <ProductCard name="T-shirt" price={499} />
      <LikeButton/>
      <ProductCard name="Jeans" price={999} />
      <LikeButton/>
    </div>
  );
};

export default Parent;

