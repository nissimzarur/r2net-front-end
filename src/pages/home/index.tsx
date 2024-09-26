import { Box } from "@mui/material";
import { DiamondsList, FilterBar, Header } from "./components";
import { Spacer } from "@components/controllers";
import { DiamondsListContext } from "./context/diamonds-list";
import { useState } from "react";
import { IFilterInputs, ShapeEnum } from "@utils/interfaces";

function HomePage() {
  const [filter, setFilter] = useState<Partial<IFilterInputs>>({
    labDiamond: false,
    price: 0,
    shape: ShapeEnum.ALL,
  });
  const [page, setPage] = useState<number>(1);


  return (
    <DiamondsListContext.Provider value={{ filter, setFilter, page, setPage }}>
      <Box>
        <Header />
        <FilterBar />
        <Spacer size={60} />
        <DiamondsList />
      </Box>
    </DiamondsListContext.Provider>
  );
}

export default HomePage;
