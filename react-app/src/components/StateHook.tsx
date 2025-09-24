import { useState } from "react";

/**
 * Functional React component that renders a drink's title and price,
 * and provides a button to update the price.
 *
 * @returns {JSX.Element} A fragment containing the drink info and update button.
 */
const StateHook = () => {
  // Initialize state with a drink object containing title and price
  const [drink, setDrink] = useState({ title: "Expresso", price: 1.99 });

  // Handler to update the drink's price when the button is clicked
  const handleClick = () => {
    setDrink({ ...drink, price: 2.99 }); // Update only the price property
  };
  const handleReset = () => {
    setDrink({ ...drink, price: 1.99 }); // Reset to original state
  };

  return (
    <>
      {/* Display the drink's title and price */}
      <h3>
        {drink.title} : {drink.price}
      </h3>
      {/* Button to trigger price update */}
      <button className="btn btn-primary" onClick={handleClick}>
        Update Drink
      </button>
      <button className="btn btn-secondary m-1" onClick={handleReset}>
        Reset Drink
      </button>
    </>
  );
};

export default StateHook;
