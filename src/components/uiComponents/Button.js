import React from "react";
import PropTypes from "prop-types";
import { IoAddCircleOutline } from "react-icons/io5";

// Button.propTypes = {
//     /** Give a name to your button */
//     buttontext: PropTypes.string,
//     /**
//      Event or function to be executed onClick
//      */
//     // onClick: PropTypes.event,
// };

Button.defaultProps = {
  buttontext: "Button",
  onClick: () => {
    alert("This is on click");
  },
};

export function Button(props) {
  const { node, onClick = (e, node) => {} } = props;

  const { label } = node;

  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      onClick={(e) => {
        onClick(e, node);
      }}
    >
      <span>
        <button
          type="button"
          style={{
            padding: 0,
            background: "none",
            border: "none",
            // color: "rgb(150, 165, 175)",
            color: "rgb(100, 137, 160)",

            fontSize: "12px",
            fontWeight: "normal",
          }}
        >
          {label}
        </button>
      </span>
    </div>
  );
}
