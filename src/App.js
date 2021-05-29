import React from 'react';
import './App.css';

import PizzaForm from "./components/PizzaForm"
import Recipe from "./components/Recipe"

export default class App extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        goal:{
            quantity: 1,
            idratation: 70,
            hours: 6
        },
        recipe:{
            flower: 0,
            water: 0,
            yeast: 0,
            salt: 0
        }
    };
}


onChange1 = (event) => {

    var newState = this.state;
    newState.goal.quantity = parseInt(event.target.value)

    this.setState(newState);
    this.calculateRecipe()
}

onChange2 = (event) => {
    var newState = this.state;
    newState.goal.idratation = parseInt(event.target.value)

    this.setState(newState);
    this.calculateRecipe()
}

onChange3 = (event) => {
    var newState = this.state;
    newState.goal.hours = parseInt(event.target.value)

    this.setState(newState);
    this.calculateRecipe()
}

calculateRecipe() {
    const quantity = this.state.goal.quantity
    const idratation = this.state.goal.idratation
    const hours = this.state.goal.hours

    const flower = 125
    const salt = 2.8
    const yeast = 0.6

    const totalFlower = flower * quantity
    const totalSalt = salt * quantity
    const totalYeast = yeast * quantity

    const totalWater = (totalFlower / 100) * idratation

    var newState = this.state;
    newState.recipe.flower = totalFlower
    newState.recipe.water = totalWater
    newState.recipe.yeast = totalYeast
    newState.recipe.salt = totalSalt

    this.setState(newState);
}

render() {
    return (
        <div>
            <PizzaForm 
                onChange1={this.onChange1} 
                onChange2={this.onChange2} 
                onChange3={this.onChange3} 
                goal={this.state.goal}
            />

            <Recipe recipe={this.state.recipe} />
        </div>
    )
  }
}