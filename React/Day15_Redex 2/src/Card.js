import { useState } from "react";
import foodCart from "./foodCart";

const foodItem = [
  { id: 1, food: "Pizza", price: "200" },
  { id: 2, food: "Burger", price: "150" },
  { id: 3, food: "Pasta", price: "180" },
  { id: 4, food: "Sandwich", price: "120" },
  { id: 5, food: "Fries", price: "100" },
  { id: 6, food: "Tacos", price: "160" },
  { id: 7, food: "Sushi", price: "250" },
  { id: 8, food: "Salad", price: "130" },
  { id: 9, food: "Noodles", price: "170" },
  { id: 10, food: "Biryani", price: "220" },
  { id: 11, food: "Paneer Tikka", price: "210" },
];

export default function Card() {

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
      {foodItem.map((value) => {
        return (
          <div key={value.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
           <FoodCar value={value}></FoodCar>
          </div>
        );
      })}
    </div>
  );
}
