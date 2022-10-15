import React from "react";

export const Card = (props) => {
  return (
    <div class="card">
      <img alt={props.detail} src={props.url} />
      <p>{props.detail}</p>
    </div>
  );
};
