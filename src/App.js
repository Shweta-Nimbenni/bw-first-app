import { useState } from 'react';
import './App.css';
import Vehicle from './Vehicle/vehicle';

const App = props => {
  const [vehicleState, setVehicleState] = useState(

    {
      vehicles: [
        { id:"1", VehicleType: "Car", Name: "Altroz", Manufacturer: "Tata", Fuel: "petrol" },
        { id:"2", VehicleType: "Car", Name: "Seltos", Manufacturer: "KIA", Fuel: "Disel" },
        { id:"3", VehicleType: "Car", Name: "Brezza", Manufacturer: "Tata", Fuel: "petrol" },
        { id:"4", VehicleType: "Car", Name: "Nexa", Manufacturer: "Mahindra", Fuel: "petrol" },
        { id:"5", VehicleType: "Car", Name: "Baleno", Manufacturer: "Maruti suzuki", Fuel: "petrol" },
        { id:"3", VehicleType: "Car", Name: "BMW", Manufacturer: "Tata", Fuel: "Disel" }

      ],
      Count: 6,
      showVehicles: true,
      showVehicleslabel: "Hide Vehicles",
    }
  );

  const addVehicleHandler = () => {
    const newVehicle = { VehicleType: "Car", Name: "Honda", Manufacturer: "City", Fuel: "petrol" }
    const vehicleList = [...vehicleState.vehicles];
    vehicleList.push(newVehicle);

    setVehicleState({
      vehicles: vehicleList,
      Count: vehicleState.Count + 1,
      showVehicles: vehicleState.showVehicles,
      showVehicleslabel: vehicleState.showVehicleslabel
    });
  }


  const deleteVehicleHandler = (vehicleIndex) => {
    const vehicleList = [...vehicleState.vehicles];
    vehicleList.splice(vehicleIndex, 1);
    setVehicleState({
      vehicles: vehicleList,
      Count: vehicleState.Count - 1,
      showVehicles: vehicleState.showVehicles,
      showVehicleslabel: vehicleState.showVehicleslabel
    });

  }

  const toggleVehicleListHandler = () => {
    let toggleVehicle = !vehicleState.showVehicles;
    let label = "";

    if (toggleVehicle) {
      label = "Hide Vehicle";
    }
    else {
      label = " Show Vehicles";
    }
    setVehicleState({
      vehicles: vehicleState.vehicles,
      Count: vehicleState.Count,
      showVehicles: toggleVehicle,
      showVehicleslabel: label
    })
  }

  let vehicleList = null;
  if (vehicleState.showVehicles) {
    vehicleList = (<div className="row">
      {
        vehicleState.vehicles.map((vehicleItem, index) => {
          return <Vehicle Key={vehicleItem.id}
            VehicleType={vehicleItem.VehicleType}
            Name={vehicleItem.Name}
            Manufacturer={vehicleItem.Manufacturer}
            Fuel={vehicleItem.Fuel}
            onDelete = {deleteVehicleHandler.bind(this, index)} />
        })
      }

    </div>
    );
    }

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col=lg-6">
          <h1> List of Vehicles | total Vehicles: {vehicleState.Count} </h1>
        </div>
        <div className="col=lg-6 divButton">
          <button className="btn btn-primary btn-lg buttonUpdate" onClick={addVehicleHandler}>Add Vehicle List</button>
          <button className="btn btn-secondary btn-lg buttonUpdate" onClick={toggleVehicleListHandler}>{vehicleState.showVehicleslabel}</button>
        </div>
      </div>

      {vehicleList}
    </div>

  );
}


export default App;