import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  // const [searchValue, setSearchValue] = useState("")
  const [search, setSearch] = useState('')
  console.log(search);

  let searchPlant = plants.filter(plant=>plant.name.toLowerCase().includes(search.toLowerCase()))
  console.log(searchPlant);

  function handleNewPlant(newPlant){
    console.log(newPlant);
    setPlants([...plants, newPlant])
  }

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res=>res.json())
    .then(data=>setPlants(data))
  },[])
  console.log(plants);
  return (
    <main>
      <NewPlantForm newPlant={handleNewPlant}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants={searchPlant} />
    </main>
  );
}

export default PlantPage;
