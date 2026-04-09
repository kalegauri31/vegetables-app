import vegetables from "../data/vegetables";
import VegetableCard from "./VegetableCard";

function VegetableList() {
  return (
    <div className="container">
      {vegetables.map((veg) => (
        <VegetableCard key={veg.id} veg={veg} />
      ))}
    </div>
  );
}

export default VegetableList;