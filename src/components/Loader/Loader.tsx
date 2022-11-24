import { CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "ED820E",
};

function Loader() {
  return <FadeLoader color={"#ED820E"} cssOverride={override} aria-label="Loading Spinner" />
}

export default Loader;