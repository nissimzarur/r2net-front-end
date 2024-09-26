import "./styles.css";
import { FormHelperText, MenuItem, Select } from "@mui/material";
import { ISelect } from "./interfaces";

function SelectInput({ items, className, helperText, ...props }: ISelect) {
  return (
    <div className="select-container">
      <Select
        {...props}
        className={`select-base ${className}`}
        children={items.map((item, index) => (
          <MenuItem value={item.value} children={item.label} key={index}/>
        ))}
      />
      {helperText && (
        <FormHelperText style={{ color: "#d32f2f", marginLeft:'14px' }}>{helperText}</FormHelperText>
      )}
    </div>
  );
}

export default SelectInput;
