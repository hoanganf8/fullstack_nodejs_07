import { memo } from "react";

/* eslint-disable react/prop-types */
export default memo(function Reset({ onClick }) {
  //   console.log("Reset render");
  return (
    <div>
      <button onClick={onClick}>Reset Count</button>
    </div>
  );
});
