import React, { useState } from "react";

function Footer(topMargin) {
  const [margin] = useState(topMargin ? topMargin : 0);

  return (
    <div
      style={{
        marginTop: margin.topMargin + "vh",
        backgroundColor: "red",
        height: "10vh",
        position: "absolute",
        width: "100%",
      }}
    ></div>
  );
}

export default Footer;
