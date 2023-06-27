import {AnyAction} from "redux";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {AppRootStateType} from "../../App/store";
import {useDispatch} from "react-redux";


export type AppRootDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch: () => AppRootDispatch = useDispatch