import React from 'react'

class PizzaForm extends React.Component{ 


        render() {

        const goal = this.props.goal;
        const props = this.props

        return (
            <form action="pizzaForm">
                <input onChange={props.onChange1} type="text" placeholder={goal.quantity} /> 
                <input onChange={props.onChange2} type="text" placeholder={`${goal.idratation}%`} />
                <input onChange={props.onChange3} type="text" placeholder={goal.hours} />
            </form>
        )
    }
}

export default PizzaForm

