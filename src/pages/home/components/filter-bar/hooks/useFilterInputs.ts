import { useCallback, useContext, useState } from "react";
import { LabDiamondSchema, PriceSchema, ShapeSchema } from "../schema";
import { IHandleErrorResult } from "./interfaces";
import { DiamondsListContext } from "@pages/home/context/diamonds-list";
import { debounce } from "@utils/helpers/debounce";
import { IFilterInputs } from "@utils/interfaces";

function useFilterInputs() {
  const { setFilter, setPage } = useContext(DiamondsListContext);
  const [formErrors, setFormErrors] = useState<{
    price?: string;
    shape?: string;
    labDiamond?: string;
  }>();

  const debounceFilter = debounce(
    (type, value) =>
      {
        setFilter((prev: Partial<IFilterInputs>) => ({ ...prev, [type]: value }));
        setPage(1);
      },
    500
  );

  const onFormInputChange = useCallback(
    <T extends keyof IFilterInputs>(type: T, value: IFilterInputs[T]) => {
      function handleError(result: IHandleErrorResult): { hasError: boolean } {
        if (result.error) {
          const [error] = result.error.flatten().formErrors;
          setFormErrors((prev) => ({ ...prev, [type]: error }));
          return { hasError: true };
        }
        setFormErrors((prev) => ({ ...prev, [type]: "" }));

        return { hasError: false };
      }

      const formInputsValidation: {
        [key in keyof IFilterInputs]: () => boolean;
      } = {
        price: (): boolean => {
          const res = PriceSchema.safeParse(value);
          const { hasError } = handleError(res);
          return hasError;
        },
        shape: (): boolean => {
          const res = ShapeSchema.safeParse(value);
          const { hasError } = handleError(res);
          return hasError;
        },
        labDiamond: (): boolean => {
          const res = LabDiamondSchema.safeParse(value);
          const { hasError } = handleError(res);
          return hasError;
        },
      };

      const hasError = formInputsValidation[type]();

      if (hasError) return;

      debounceFilter(type, value);
    },
    []
  );

  return {
    onFormInputChange,
    formErrors,
  };
}

export default useFilterInputs;
