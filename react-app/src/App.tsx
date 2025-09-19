// Import the Message component from the local file
import Message from "./Message";
import ListGroups from "./components/ListGroups";

// Define the main App component
function App(){
  // Render the Message component
  return(
    <>
    <Message />
    <h4>List Group Demo</h4>
    <ListGroups />
    </>
  )
}

// Export the App component as the default export
export default App;