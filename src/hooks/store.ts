import { AppDispatch, RootState } from "../types";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

// inferencia de tipos aca para no hacerlo en todos los componentes
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch