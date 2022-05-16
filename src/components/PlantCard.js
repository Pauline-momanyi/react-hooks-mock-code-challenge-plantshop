import React, {useState} from "react";

function PlantCard({plant}) {

  const[inStock, setInStock] = useState(true)
  function handleSold(){
    console.log('sold');
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleSold}>In Stock</button>
      ) : (
        <button onClick={handleSold}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
