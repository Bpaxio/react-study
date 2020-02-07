import React, {Component, useState} from 'react'
import Car from "./Car";
import classes from "./Cars.css"

class Cars extends Component {

    state = {
        cars: [
            {mark: "Infinity", mileage: 0},
            {mark: "Volkswagen", mileage: 20200},
            {mark: "Skoda", mileage: 23000}
        ],
        showCars: false
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };


    switchCarsHandler = () => {
        this.setState({
            cars: [
                {id: 0, mark: "Лада", mileage: 49230},
                {id: 1, mark: "Жигули", mileage: 140200},
                {id: 2, mark: "Москвич", mileage: 111040}
            ]
        })
    };

    deleteCarHandler = (index) => {
        const cars = [...this.state.cars];
        cars.splice(index, 1);
        this.setState({cars: cars});
    };

    changeCarHandler = (event, id) => {
        // const car = {...this.state.cars.find(c => c.id === id)};
        const carIndex = this.state.cars.findIndex(c => c.id === id);
        const car = {...this.state.cars[carIndex]};
        car.mark = event.target.value;

        const cars = [...this.state.cars];
        cars[carIndex] = car;
        this.setState({
            cars: cars
        })
    };

    render() {
        let buttonClasses = classes.Green;

        let cars = null;
        if (this.state.showCars) {
            cars = (
                <div>
                    {this.state.cars.map((car, index) => {
                        return <Car
                            click={() => this.deleteCarHandler(index)}
                            changed={event => this.changeCarHandler(event, car.id)}
                            mark={car.mark}
                            mileage={car.mileage}
                            key={car.id}
                        />
                    })}
                    <button key="reset" className={classes.Red} onClick={this.switchCarsHandler}>Reset</button>
                </div>
            );
            buttonClasses = classes.Red;
        }
        return (
            <div className={classes.Cars}>
                <button key="show" className={buttonClasses} onClick={this.toggleCarsHandler}>Show/Hide Cars</button>
                {cars}
            </div>
        )
    }
}

export default Cars;