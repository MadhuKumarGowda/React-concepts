import { useState } from "react";
import Button_passChild from "./Button_passChild";

// Alert_model component displays a dismissible alert and a button to toggle its visibility
const Alert_model = () => {
  // State to track whether the alert is visible
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {/* Conditionally render the alert if alertVisible is true */}
      {alertVisible && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          {/* Close button for the alert (does not update alertVisible state) */}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertVisible(false)}
          ></button>
        </div>
      )}
      {/* Button to toggle the alert visibility */}
      <Button_passChild
        color="danger"
        onclick={() => setAlertVisible(!alertVisible)}
      >
        {alertVisible ? "Hide Alert" : "Show Alert"}
      </Button_passChild>
    </>
  );
};

export default Alert_model;
