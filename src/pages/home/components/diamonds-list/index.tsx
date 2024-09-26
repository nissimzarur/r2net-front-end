import "./styles.css";
import { Spacer } from "@components/controllers";
import DiamondCard from "@components/ui/cards/diamond";
import { CircularProgress, Pagination } from "@mui/material";
import { useContext } from "react";
import { DiamondsListContext } from "@pages/home/context/diamonds-list";
import { useQuery } from "@apollo/client";
import api from "@api/index";
import { IFetchDiamondsResponse } from "@api/diamonds/fetch-diamonds/interfaces";
import usePagination from "./hooks/usePagination";
import { ShapeEnum } from "@utils/interfaces";

function DiamondsList() {
  const { filter } = useContext(DiamondsListContext);
  const { PAGE_SIZE, handlePageChange, page } = usePagination();
  const {
    loading,
    error,
    data: diamondsDataResponse,
  } = useQuery<IFetchDiamondsResponse>(api.diamonds.FETCH_DIAMONDS, {
    variables: {
      pagination: { limit: 10, offset: (page - 1) * PAGE_SIZE },
      filterDiamonds: {
        price: filter.price,
        shape: filter.shape,
        isLabDiamond: filter.labDiamond,
      },
    },
    fetchPolicy: "cache-first",
  });

  const diamondsData = diamondsDataResponse?.fetchDiamonds?.items || [];
  const totalDiamonds = diamondsDataResponse?.fetchDiamonds?.total || 0;
  const diamondsDataExists = diamondsData.length || false;

  if (loading) return <CircularProgress color="secondary" />;
  if (!diamondsDataExists) return "Diamonds not found";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="diamonds-list-base">
      <div className="diamonds-list-cards">
        {diamondsData.map(({ _id, ...rest }) => {
          return <DiamondCard key={_id} data={rest} />;
        })}
      </div>
      <Spacer size={60} />
      <Pagination
        page={page}
        count={totalDiamonds / PAGE_SIZE}
        style={{ alignSelf: "center" }}
        onChange={handlePageChange}
      />
      <Spacer size={60} />
    </div>
  );
}

export default DiamondsList;
