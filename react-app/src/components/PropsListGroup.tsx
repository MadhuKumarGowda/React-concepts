// PropsListGroup.tsx
// This file defines and exports the PropsListGroup React component.
// The component renders a Bootstrap-styled list group, with its title and items provided via props.

import { useState } from "react";

// Define the Props interface for the component.
// - title: The heading to display above the list.
// - items: An array of strings to display as list items.
interface Props {
  title: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

// PropsListGroup component definition.
// Receives props of type Props and renders a list group.
function PropsListGroup(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Map over the items array to create <li> elements for each item.
  const listItems = props.items.map((item, index) => {
    return (
      <li
        key={index}
        className={
          selectedIndex === index ? "list-group-item active" : "list-group-item"
        }
        onClick={() => {
          setSelectedIndex(index);
          props.onSelectItem(item);
        }}
      >
        {item}
      </li>
    );
  });

  // Render the component UI:
  // - A container div with margin.
  // - The title as an <h3>.
  // - The list of items inside a Bootstrap-styled <ul>.
  return (
    <>
      <div className="m-3">
        <h3>{props.title}</h3>
        <ul className="list-group">{listItems}</ul>
      </div>
    </>
  );
}

// Export the component as default for use in other files.
export default PropsListGroup;
