// Import React (optional in modern React, but good for clarity)
// import React from 'react';

/**
 * Button_prop Component
 * This is a simple functional component that renders a div with the text "Button_prop".
 */

interface Props {
  btnType: string;
  btnText: string;
}
const Button_prop = ({ btnType, btnText }: Props) => {
  // Render the component UI
  return (
    <>
      <button className={btnType}>{btnText}</button>
    </>
  );
};

// Export the component as default
export default Button_prop;
