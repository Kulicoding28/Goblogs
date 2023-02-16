import React from "react";
import Thumbnail from "./Thumbnail";

export default function HotList({ hots }) {
  return (
    <div>
      {hots.map((hot) => (
        <div key={hot.id}>
          <Thumbnail {...hot} />
        </div>
      ))}
    </div>
  );
}
