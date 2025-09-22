// App.tsx
// Main entry point of the React application.
// Imports and renders demo components: Message, ListGroups, PropsListGroup, Alert, Button, and Button_prop.
// Demonstrates passing props, children, and event handlers to components.

import Message from "./Message";
import ListGroups from "./components/ListGroups";
import PropsListGroup from "./components/PropsListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button_passChild";
import Button_prop from "./components/Button_prop";

/**
 * Main application component rendering various demo components.
 *
 * Features:
 * - Defines a list of city names and passes them as props to PropsListGroup.
 * - Renders Message, ListGroups, and Alert components.
 * - Demonstrates passing children to Alert and Button components.
 * - Demonstrates passing props to Button_prop for different button styles and texts.
 */
function App() {
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

  return (
    <>
      <Message />
      <h4>List Group Demo</h4>
      <ListGroups />
      <br />
      {/* Alert component with children */}
      <Alert>
        Hello from <span>Alert child component</span>
      </Alert>
      <br />
      {/* PropsListGroup with cities, title, and selection handler */}
      <PropsListGroup
        items={cities}
        title="Indian Top 5 Cities"
        onSelectItem={handleSelectItem}
      />
      <br />
      <h4> Button - Pass HTML component as Props</h4>
      <Button>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </Button>
      <br />
      <h4> Button: Pass Child as Prop</h4>
      <Button_prop btnType="btn btn-primary" btnText="Submit" />
      <Button_prop btnType="btn btn-secondary" btnText="Reset" />
      <Button_prop btnType="btn btn-success" btnText="Done" />
    </>
  );
}

export default App;
