import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {    
    marginBottom: "1rem",      
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
    borderRadius: "1rem",
    height: "50px",
    fontSize: "15px",
    width: "100px"
  };

  return (
    <>
      <div style={styles}>
        <h3>{msg}</h3>
      </div>
    </>
  );
};

Message.defaultProps = {
  msg: "An error happened!",
};

export default Message;
