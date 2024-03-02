import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.animals.map((animal, index) => (
          <div key={index}>
            <h5>{animal.name}</h5>
            <img src={animal.image} alt={animal.name} width="300px" />
            <span style={{ display: "block", textAlign: "left" }}>{animal.specie}</span>
          </div>
        ))}
      </div>
    );
  }
}