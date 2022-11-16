// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image, servings };
    
    console.log("Submitted", newFood);
    props.addFood(newFood);

    // Reset the state
    setName("");
    setCalories("");
    setImage("");
    setServings("");
  }
  
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;


