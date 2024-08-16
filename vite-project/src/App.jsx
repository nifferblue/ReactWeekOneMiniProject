import Card from "./Card"
import './App.css';

import sedan from './assets/icon-sedans.svg'
import suv from './assets/icon-suvs.svg'
import luxury from './assets/icon-luxury.svg'


function App() {
 

  return (
    <div className="card-wrapper">
     <Card image = {sedan}
            title = "Sedan"
            description="Choose a sedan for its affordability and excellent fuel economy. 
                      Ideal for cruising in the city or on your next road trip."
            className ="sedan-card"          
            />
     <Card  image={suv}
            title={"Suv"}
            description={"Take an SUV for its spacious interior, power, and versatility.Perfect for your next family vacation and off-road adventures."}
            className="suv-card"
              
            
            />

     <Card image={luxury}
            title={"Luxury"}
            description={"Cruise in the best car brands without the bloated prices.Enjoy the enhanced comfort of a luxury rental and arrive in style."}
            className="luxury-card"
            />

    </div>
  )
}

export default App
