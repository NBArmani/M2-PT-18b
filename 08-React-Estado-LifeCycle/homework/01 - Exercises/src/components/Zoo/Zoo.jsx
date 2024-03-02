import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
//import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  const [zoo, setZoo] = useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: []
  });

  useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  },[]);

  const handleSpecies = (species) => {
    const filteredAnimals = zoo.allAnimals.filter(animal => animal.specie === species);
    setZoo({ ...zoo, animals: filteredAnimals });
  };

  const handleAllSpecies = () => {
    setZoo(prevZoo => ({ ...prevZoo, animals: prevZoo.allAnimals }));
  };

  const handleInputChange = (event) => {
    const newZooName = event.target.value;
    setZoo(prevZoo => ({ ...prevZoo, zooName: newZooName }));
  };

  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange} placeholder="Escribe aquí el nombre de tu zoológico" />
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies} />
      <Animals animals={zoo.animals} />
    </div>
  );
}