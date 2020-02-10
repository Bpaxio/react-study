import React, {Component} from 'react'
import Car from "./Car/Car";
import classes from "./Cars.module.css"

class Cars extends Component {
    constructor(props) {
        super(props);
        console.log('[Cars.js] constructor');
        this.state = {
            cars: [
                {id: 0, mark: 'Infinity', mileage: 0},
                {id: 1, mark: 'Volkswagen', mileage: 20200},
                {id: 2, mark: 'Skoda', mileage: 23000}
            ],
            showCars: false,
            buttonTitle: 'Show Cars'
        };
    }

    render() {
        console.log('[Cars.js] render');
        let buttonClasses = classes.Green;

        let cars = null;
        if (this.state.showCars) {
            cars = (
                <div>
                    <button key="reset" className={classes.Red} onClick={this.switchCarsHandler}>Reset</button>
                    <button key="removeAll" className={classes.Red} onClick={this.deleteCarsHandler}>Remove</button>
                    {this.state.cars.map((car, index) => {
                        return <Car
                                    click={() => this.deleteCarHandler(index)}
                                    changed={event => this.changeCarHandler(event, car.id)}
                                    mark={car.mark}
                                    mileage={car.mileage}
                                    key={car.id}
                                />
                    })}
                </div>
            );
            buttonClasses = classes.Red;
        }
        return (
                <div className={classes.Cars}>
                    <button key="show"
                            className={buttonClasses}
                            onClick={this.toggleCarsHandler}>
                        {this.state.buttonTitle}
                    </button>
                    {cars}
                </div>
        );
    }

    toggleCarsHandler = () => {
        const newShowCars = !this.state.showCars;
        this.setState({
            showCars: newShowCars,
            buttonTitle: newShowCars ? "Hide Cars" : "Show Cars"
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

    deleteCarsHandler = () => {
        this.setState({cars: []});
    };

    changeCarHandler = (event, id) => {
        // const car = {...this.state.cars.find(c => c.id === id)};
        const carIndex = this.state.cars.findIndex(
            c => c.id === id
        );
        const car = {...this.state.cars[carIndex]};
        car.mark = event.target.value;

        const cars = [...this.state.cars];
        cars[carIndex] = car;
        this.setState({
            cars: cars
        })
    };
}

export default Cars;