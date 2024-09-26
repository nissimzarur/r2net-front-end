import "./styles.css";
import {
  Spacer,
  Container,
  TextInput,
  SelectInput,
  SwitchInput,
  Text,
} from "@components/controllers";
import { Divider } from "@mui/material";
import useFilterInputs from "./hooks/useFilterInputs";
import { ShapeEnum } from "@utils/interfaces";

function FilterBar() {
  const { onFormInputChange, formErrors } = useFilterInputs();
  const selectOptions = Object.values(ShapeEnum).map((value) => ({
    label: value,
    value,
  }));

  return (
    <>
      <Spacer size={20} />
      <Divider variant="middle" orientation="horizontal">
        <Text>Filter results by price, shape and lab diamonds</Text>
      </Divider>
      <Spacer size={20} />
      <Container className="filter-bar-container">
        <TextInput
          placeholder="Enter price..."
          onInput={(event) => {
            const isEmpty = event.target.value.length === 0;
            onFormInputChange(
              "price",
              isEmpty ? 0 : parseInt(event.target.value)
            );
          }}
          error={formErrors?.price?.length ? true : false}
          helperText={formErrors?.price}
        />
        <SelectInput
          defaultValue={ShapeEnum.ALL}
          items={selectOptions}
          onChange={(event) => {
            onFormInputChange("shape", event.target.value as ShapeEnum);
          }}
          error={formErrors?.shape?.length ? true : false}
          helperText={formErrors?.shape}
        />
        <SwitchInput
          label="Lab Diamonds"
          handleOnChange={(checked) => onFormInputChange("labDiamond", checked)}
        />
      </Container>
    </>
  );
}

export default FilterBar;
