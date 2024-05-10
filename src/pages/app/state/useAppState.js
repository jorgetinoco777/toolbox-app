import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../stores/hooks/storeHook";
import { getAllFiles } from "../../../stores/thunks/app";

export const useAppState = () => {
    const dispatch = useAppDispatch();
    const {
        data
      } = useAppSelector((state) => state.app);

      useEffect(() => {
        dispatch( getAllFiles() );
      }, [])

    return {
        data,
    };
}; 