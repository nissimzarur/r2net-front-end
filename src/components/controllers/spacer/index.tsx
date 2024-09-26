import { ISpacer } from "./interfaces";

function Spacer(props: ISpacer) {
  return <div style={{ marginTop: props.size }} />;
}

export default Spacer;
