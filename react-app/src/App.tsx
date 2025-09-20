// App.tsx
// This is the main entry point of the React application.
// It imports and renders several components, including Message, ListGroups, and PropsListGroup.
// The App component also defines a list of city names and passes them as props to PropsListGroup.

import Message from "./Message"; // Import the Message component from the local file
import ListGroups from "./components/ListGroups"; // Import the ListGroups component
import PropsListGroup from "./components/PropsListGroup"; // Import the PropsListGroup component

// Define the main App component
/**
 * The main application component that renders various demo components.
 *
 * Features:
 * - Defines an array of city names (`cities`) to demonstrate passing props to child components.
 * - Renders the `Message` component.
 * - Renders the `ListGroups` component.
 * - Renders the `PropsListGroup` component, passing the `cities` array and a title as props.
 *
 * Props Feature Implementation:
 * - Demonstrates how to pass data (`items` and `title`) as props to the `PropsListGroup` component,
 *   enabling dynamic rendering of list content based on parent-provided data.
 */
function App() {
  // Define an array of city names
  const cities: string[] = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
  ];

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  // Render the Message, ListGroups, and PropsListGroup components
  return (
    <>
      <Message />
      <h4>List Group Demo</h4>
      <ListGroups />

      <PropsListGroup
        items={cities}
        title="Indian Top 5 Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

// Export the App component as the default export
export default App;
