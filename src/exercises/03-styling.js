import React from "react";
import PropTypes from "prop-types";
import "./03-styling.css";
// import the css styles using: `import './03-styling.css'`
// this will use webpack to load the css styles into your app.

function Box(props) {
  return (
    // render a div with the props:
    // - className that is assigned to `Box Box--${props.size}`
    // - style that is assigned to props.style
    // inside the div, forward along props.children
    <div className={`Box--${props.size}`} style={props.style}>
      {props.children}
    </div>
  );
}

// I'm gonna give this one to you. Isn't that nice? :)
Box.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export const Example = () => (
  <div>
    <Box className='Box--small' size='small'>
      This is small box
    </Box>
    <Box className='Box--medium' size='medium'>
      This is medium box
    </Box>
    <Box className='Box--large' size='large'>
      This is big box
    </Box>
  </div>
);
