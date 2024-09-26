import { TextField } from "@mui/material";
import { ITextInput } from "./interfaces";

function TextInput({ ...props }: ITextInput) {
  return <TextField {...props} />;
}

export default TextInput;
