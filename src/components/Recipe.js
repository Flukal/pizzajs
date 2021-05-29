import React, { Component } from 'react'

export default class Recipe extends Component {
    
    render() {
        const recipe = this.props.recipe


        return (
            <div>
                <p>Flower: {recipe.flower}</p>        
                <p>Water: {recipe.water}</p>    
                <p>Yeast: {recipe.yeast}</p>    
                <p>Salt: {recipe.salt}</p>
            </div>
        )
    }
}
