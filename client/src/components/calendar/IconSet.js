import React from "react";

import Icon from "./Icon";

export default props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "0",
        position: "absolute",
        right: "1%"
      }}
    >
      <Icon icon="edit" />
      <Icon icon="check" />
      <Icon icon="times" />
    </div>
  );
};
