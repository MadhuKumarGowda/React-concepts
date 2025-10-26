/**
 * @fileoverview Form component that renders a simple contact form with name and phone fields.
 * This component provides a basic form structure with Bootstrap styling and form submission handling.
 *
 * @author GitHub Copilot
 * @since 1.0.0
 */

import { useState } from "react";

/**
 * Form component that renders a contact form with name and phone input fields.
 *
 * Features:
 * - Prevents default form submission behavior
 * - Includes Bootstrap CSS classes for styling
 * - Provides accessible form labels and inputs
 * - Logs form submission to console
 *
 * @component
 * @returns {JSX.Element} A form element containing name and phone input fields with a submit button
 *
 * @example
 * ```tsx
 * <Form />
 * ```
 */
const Form = () => {
  // State hook to manage form data with initial values for name and phone
  const [person, setPerson] = useState({ name: "", phone: "" });

  // Form submission handler that prevents default browser behavior and logs form data
  const handleSubmit = (event: React.FormEvent) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();
    // Log the current person state to console for debugging
    console.log("Person State Hook", person);
  };
  return (
    // Render the form with onSubmit handler to prevent default submission
    <form onSubmit={handleSubmit}>
      {/* Name input field container */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* Text input for user's name - fully managed by React as single source of truth (Value attribute), not DOM */}
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>

      {/* Phone input field container */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        {/* Number input for user's phone - fully managed by React as single source of truth, not DOM */}
        <input
          onChange={(event) =>
            setPerson({ ...person, phone: parseInt(event.target.value) })
          }
          value={person.phone}
          id="phone"
          type="number"
          className="form-control"
        />
      </div>

      {/* Submit button with Bootstrap primary styling */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
