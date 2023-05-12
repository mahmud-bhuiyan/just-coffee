import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./pages/CoffeeCard/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-20">
      <h6 className="text-center text-purple-600">--- Sip & Savor ---</h6>
      <h1 className="text-5xl text-center mt-2 mb-8 text-purple-600">
        Our Popular Products
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
