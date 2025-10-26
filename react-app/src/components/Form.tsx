/**
 * @fileoverview Form component that renders a simple contact form with name and phone fields.
 * This component provides a basic form structure with Bootstrap styling and form submission handling.
 *
 * @author GitHub Copilot
 * @since 1.0.0
 */

import { useRef } from "react";

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
  // Create refs to access DOM elements directly
  const nameRef = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  // Initialize person object to store form data
  const person = { name: "", phone: 0 };

  // Handle form submission event
  const handleSubmit = (event: React.FormEvent) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Extract name value from input if ref is not null
    if (nameRef.current != null) {
      person.name = nameRef.current.value;
    }

    // Extract phone value from input and convert to number if ref is not null
    if (phone.current != null) {
      person.phone = parseInt(phone.current.value);
    }

    // Log the collected form data to console
    console.log(person);
  };
  return (
    // Render the form with onSubmit handler to prevent default submission
    <form onSubmit={handleSubmit}>
      {/* Name input field container */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* Text input for user's name */}
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      {/* Phone input field container */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        {/* Number input for user's phone */}
        <input ref={phone} id="phone" type="number" className="form-control" />
      </div>

      {/* Submit button with Bootstrap primary styling */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
