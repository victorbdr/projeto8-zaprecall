import React from "react";
export default function Footer(props) {
  return (
    <div className="contador">
      <div className="value">{props.contador?.length}/4 Completos</div>
    </div>
  );
}
