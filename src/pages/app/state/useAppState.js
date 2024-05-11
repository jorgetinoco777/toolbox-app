import { useEffect, useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../stores/hooks/storeHook";
import { getAllFiles } from "../../../stores/thunks/app";

export const useAppState = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.app);

  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (value) => {
    console.log("Change: ", value);
    if (value.length === 0) dispatch(getAllFiles());

    setSearchValue(value);
  };

  const handleClickSearchValue = () => {
    dispatch(getAllFiles(searchValue));
  };

  useEffect(() => {
    dispatch(getAllFiles());
  }, []);

  return {
    data,
    searchValue,
    handleChangeSearchValue,
    handleClickSearchValue,
  };
};
