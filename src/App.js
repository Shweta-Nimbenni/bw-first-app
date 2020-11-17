import { useState } from 'react';
import './App.css';
import Vehicle from './Vehicle/vehicle';

const App = props => {
  const [vehicleState, setVehicleState] = useState(
    {
      vehicles: [
        { VehicleType: "Car", Name: "Altroz", Manufacturer: "Tata", Fuel: "petrol" },
        { VehicleType: "Car", Name: "Seltos", Manufacturer: "KIA", Fuel: "Disel" },
        { VehicleType: "Car", Name: "Brezza", Manufacturer: "Tata", Fuel: "petrol" },
        { VehicleType: "Car", Name: "Brezza", Manufacturer: "Tata", Fuel: "petrol" }

      ]
    }
  );
  const updateHandler = () => {
    setVehicleState({
      vehicles: [
        { VehicleType: "Car", Name: "Jaguar XS", Manufacturer: "Tata", Fuel: "petrol" },
        { VehicleType: "Car", Name: "Crysta", Manufacturer: "Tata", Fuel: "Disel" },
        { VehicleType: "Car", Name: "Audi", Manufacturer: "Tata", Fuel: "petrol" },
        { VehicleType: "Car", Name: "Thar", Manufacturer: "Tata", Fuel: "petrol" }
      ]
    });
  }
  return (
    <div className="App container-fluid">
      <div className="row">
        <h1> List of Vehicles </h1>
        <button className="btn btn-Primary btn-lg buttonUpdate" onClick={updateHandler}>Update List</button>
      </div>
      <div className="row">
        <Vehicle VehicleType={vehicleState.vehicles[0].VehicleType} Name={vehicleState.vehicles[0].Name} Manufacturer={vehicleState.vehicles[0].Manufacturer} Fuel={vehicleState.vehicles[0].Fuel} />
        <Vehicle VehicleType={vehicleState.vehicles[1].VehicleType} Name={vehicleState.vehicles[1].Name} Manufacturer={vehicleState.vehicles[1].Manufacturer} Fuel={vehicleState.vehicles[1].Fuel} />
        <Vehicle VehicleType={vehicleState.vehicles[2].VehicleType} Name={vehicleState.vehicles[2].Name} Manufacturer={vehicleState.vehicles[2].Manufacturer} Fuel={vehicleState.vehicles[2].Fuel} />
        <Vehicle VehicleType={vehicleState.vehicles[3].VehicleType} Name={vehicleState.vehicles[3].Name} Manufacturer={vehicleState.vehicles[3].Manufacturer} Fuel={vehicleState.vehicles[3].Fuel} />
      </div>
    </div>
  );
};


export default App;
