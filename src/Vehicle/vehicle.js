import './vehicle.css'
const vehicle = props=> (
    <div>
<h1>
vehicle :{props.vehicleType}
</h1>

<p>Name:{props.Name}</p>
<p>Manifracturer:{props.Manifracturer}</p>
<p>Fuel:{props.Fuel}</p>
    </div>
)
export default vehicle;