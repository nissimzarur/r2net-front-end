import { useContext } from "react";
import { PAGE_SIZE } from "@utils/constants";
import { DiamondsListContext } from "@pages/home/context/diamonds-list";

function usePagination() {
  const { setPage, page } = useContext(DiamondsListContext);
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  return {
    PAGE_SIZE,
    page,
    handlePageChange,
  };
}

export default usePagination;
