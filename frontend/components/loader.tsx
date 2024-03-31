import React from "react";

import { LuLoader2 } from "react-icons/lu";
function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center py-12">
      <LuLoader2 className="animate-spin h-22 w-22" />
    </div>
  );
}

export default Loader;
