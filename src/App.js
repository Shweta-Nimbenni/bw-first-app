
import React from 'react';
import './App.css';
import Vehicle from './Vehicle/vehicle';

class App extends React.Component  {
  constructor(props){
    super(props);
this.state={
  vehicle:[
    {VehicleType:"Car", Name: "Altroz", Manufacturer:"Tata", FuelType:"petrol"},
    {VehicleType:"Car", Name: "Nexon", Manufacturer:"Tata", FuelType:"Electric"},
    {VehicleType:"Car", Name: "XUV", Manufacturer:"Mahindra", FuelType:"Disel"},
    {VehicleType:"Car", Name: "Baleno", Manufacturer:"Maruti Suzuki", FuelType:"petrol"},
  ]
}
  }
   render(){
     return(
       <div>
         <h1>List of Vehicle</h1> 
         <Vehicle VehicleType={this.state.vehicles[0].VehicleType} Name={this.state.vehicles[0].Name} Manufacturer={this.state.vehicles[0].Manufacturer} FuelType={this.state.vehicles[0].FuelType}/>
         <Vehicle VehicleType={this.state.vehicles[1].VehicleType} Name={this.state.vehicles[1].Name} Manufacturer={this.state.vehicles[1].Manufacturer} FuelType={this.state.vehicles[1].FuelType}/>
         <Vehicle VehicleType={this.state.vehicles[2].VehicleType} Name={this.state.vehicles[2].Name} Manufacturer={this.state.vehicles[2].Manufacturer} FuelType={this.state.vehicles[2].FuelType}/>
         <Vehicle VehicleType={this.state.vehicles[3].VehicleType} Name={this.state.vehicles[3].Name} Manufacturer={this.state.vehicles[3].Manufacturer} FuelType={this.state.vehicles[3].FuelType}/>
         
         </div>
     );
   };
}

export default App;
