import React, {Component, useState} from 'react'
import Car from "./Car";

class Cars extends Component {

    state = {
        cars: [
            {mark: "Infinity", mileage: 0},
            {mark: "Volkswagen", mileage: 20200},
            {mark: "Skoda", mileage: 23000}
        ],
        showCars: false
    };
    switchCarsHandler = () => {
        this.setState({
            cars: [
                {mark: "Лада", mileage: 49230},
                {mark: "Жигули", mileage: 140200},
                {mark: "Москвич", mileage: 111040}
            ]
        })
    };
    switchSpecialCarHandler = (position, newCar) => {
        this.setState(this.state.cars.splice(position,1,newCar))
    };

    markChangedHandler = ( event ) => {
        this.setState({
            cars: [
                {mark: "Лада", mileage: 49230},
                {mark: "Жигули", mileage: 140200},
                {mark: event.target.value, mileage: 111040}
            ]
        })
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };

    render() {
        const buttonStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };
        return (
            <div className="Cars">
                <p/>
                <button style={buttonStyle} onClick={this.toggleCarsHandler}>Show/Hide Cars</button>
                {this.state.showCars === true ?
                    <div>
                        <p>
                            ===================== CARS =======================
                        </p>
                        <button style={buttonStyle} onClick={this.switchCarsHandler}>Update Cars</button>
                        <Car
                            mark={this.state.cars[0].mark}
                            mileage={this.state.cars[0].mileage}
                            click={this.switchSpecialCarHandler.bind(this, 0, {mark: "Лада", mileage: 49230})}
                        >

                        </Car>
                        <Car
                            mark={this.state.cars[1].mark}
                            mileage={this.state.cars[1].mileage}
                            // using bind is more convenient because of react rerendering times
                            click={() => this.switchSpecialCarHandler(1, {mark: "Жигули", mileage: 140200})}>

                        </Car>
                        <Car
                            mark={this.state.cars[2].mark}
                            mileage={this.state.cars[2].mileage}
                            changed={this.markChangedHandler}
                            click={this.switchSpecialCarHandler.bind(this, 2, {mark: "Москвич", mileage: 111040})}>
                        </Car>
                    </div> : null
                }
            </div>


        )
    }
}

export default Cars;