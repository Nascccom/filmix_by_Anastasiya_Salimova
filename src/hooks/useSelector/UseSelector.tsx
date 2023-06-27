import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store.ts";

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector