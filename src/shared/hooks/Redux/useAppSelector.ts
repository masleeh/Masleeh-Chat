import { IStateSchema } from "app/providers/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector