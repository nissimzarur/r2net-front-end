import "./styles.css";
import { Box, Switch } from "@mui/material";
import { ISwitch } from "./interfaces";
import { useState } from "react";
import Text from "@components/controllers/text";

function SwitchInput({ label, ...props }: ISwitch) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleOnCheck = () => {
    setIsChecked((prev) => {
      props.handleOnChange(!prev);
      return !prev;
    });
  };

  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <Switch {...props} checked={isChecked} onChange={handleOnCheck} />
      {label && <Text className="switch-text">{label}</Text>}
    </div>
  );
}

export default SwitchInput;
