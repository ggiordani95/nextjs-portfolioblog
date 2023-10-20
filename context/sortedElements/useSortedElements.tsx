import React, { useContext } from "react";
import { SortedTopicsContext } from ".";

function useSortedElements() {
  return useContext(SortedTopicsContext);
}

export default useSortedElements;
