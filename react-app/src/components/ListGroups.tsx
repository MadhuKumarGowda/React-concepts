/**
 * Renders a list of city names as list group items.
 *
 * @returns {JSX.Element} An unordered list of cities styled with Bootstrap classes.
 *
 * @remarks
 * This component demonstrates mapping over an array to render a list in React.
 */
function ListGroups() {
  // Array of city names to display in the list
  const items = ["New York", "London", "Tokyo", "Paris", "Sydney"];

  // Map each city name to a <li> element with a unique key
  const list_items = items.map((item) => (
    <li className="list-group-item" key={item}>
      {item}
    </li>
  ));

  // Render the list of cities inside a Bootstrap-styled <ul>
  return <ul className="list-group">{list_items}</ul>;
}

export default ListGroups;
