import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';



function App() {
  const [food, setFood] = useState(foods);
  return <div className="App">
    <div>
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((food) => {
          return (
            <div>
              <p> {food.name } </p>
              <img src={food.image} width={100} />
              
            </div>
            
          )
        })}
      </Row>
    </div>

      


  </div>

}
export default App;