/**
 * Renders a list of city names as list group items.
 *
 * @returns {JSX.Element} An unordered list of cities styled with Bootstrap classes.
 *
 * @remarks
 * This component demonstrates mapping over an array to render a list in React.
 */

import type { MouseEvent } from "react";
function ListGroups() {
  // Array of city names to display in the list
  const items = ["New York", "London", "Tokyo", "Paris", "Sydney"];

  const empty_message = "No items to display";

  /**
   * Handles the click event for a list group item.
   *
   * @param event - The mouse event triggered by clicking the item.
   */
  const handleClick = (event: MouseEvent) => console.log(event);
  // Map each city name to a <li> element with a unique key
  const list_items = items.map((item) => (
    <li className="list-group-item" key={item} onClick={handleClick}>
      {item}
    </li>
  ));

  // Render the list of cities inside a Bootstrap-styled <ul>
  return (
    <>
      {items.length === 0 && <p>{empty_message}</p>}
      <ul className="list-group">{list_items}</ul>
    </>
  );
}

export default ListGroups;
