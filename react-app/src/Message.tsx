// Message.tsx
// This component displays a simple greeting message.

function Message() {
    // Define a constant for the user's name
    const name = "Madhu Kumar K S"
    // Render a heading with a greeting
    if (name)
        return <h1>Hello {name}</h1>
    return <h1> Hello from React App</h1>
}

export default Message;