import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import "./App.css";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const totalCalories = meals.reduce((acc, meal) => acc + meal.calories, 0);

  const addMeal = () => {
    if (food && calories) {
      setMeals([...meals, { food, calories: parseInt(calories) }]);
      setFood("");
      setCalories("");
    }
  };

  const removeMeal = (index) => {
    const updatedMeals = meals.filter((_, i) => i !== index);
    setMeals(updatedMeals);
  };

  return (
    <div className="Container">
      <motion.h1 animate={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        🍏 Calorie Counter
      </motion.h1>

      <div className="InputContainer">
        <input
          type="text"
          placeholder="Food Name"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addMeal}
        >
          Add Meal
        </motion.button>
      </div>

      <div className="MealList">
        {meals.map((meal, index) => (
          <motion.div
            key={index}
            className="meal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>{meal.food}</p>
            <span>{meal.calories} kcal</span>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#ff4d4d" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => removeMeal(index)}
            >
              ❌
            </motion.button>
          </motion.div>
        ))}
      </div>

      <div className="TotalCalories">
        <motion.h2 animate={{ x: [-10, 10, 0] }}>
          Total Calories: {totalCalories} kcal
        </motion.h2>
      </div>
    </div>
  );
};

export default App;
