function VegetableCard({ veg }) {
  return (
    <div className="card">
      <img src={veg.image} alt={veg.name} />
      <h3>{veg.name}</h3>
      <p>₹{veg.price}/kg</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default VegetableCard;