// Importing the global CSS file (Vanilla CSS)
// This will apply styles globally to the application
import "./VanillaCSS.css";

// Importing the CSS Module
// Styles imported as an object, scoped locally to this component
import vanillaStyles from "./VanillaCSS.module.css";

// Functional component definition for VanillaCSS
const VanillaCSS = () => {
  const players: string[] = [
    "Virat Kohli",
    "Rohit Sharma",
    "Jasprit Bumrah",
    "KL Rahul",
    "Ravindra Jadeja",
  ];

  const item_list = players.map((player, index) => {
    return (
      // Using a class from the global CSS (Vanilla CSS)
      <li className="list-group-item" key={index}>
        {player}
      </li>
    );
  });

  return (
    <>
      {/* Using classes from the CSS Module for scoped styling */}
      <h2
        className={[vanillaStyles.container, vanillaStyles.heading].join(" ")}
      >
        Top indian Players{" "}
      </h2>
      {/* Using a class from the global CSS (Vanilla CSS) */}
      <ul className="list-group">{item_list}</ul>
    </>
  );
};

export default VanillaCSS;
