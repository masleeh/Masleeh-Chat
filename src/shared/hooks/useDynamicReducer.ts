import { Reducer } from "@reduxjs/toolkit";
import { useEffect } from "react"
import { useAppDispatch } from "./Redux/useAppDispatch";
import { StateSchemaKey } from "app/providers/store";
import useAppStore from "./Redux/useAppStore";

const useDynamicReducer = (
    name: StateSchemaKey,
    reducer: Reducer,
    isRemovable: boolean = true
) => {
    const store = useAppStore()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const reducers = store.reducerManager.getReducerMap()
        if (!Object.keys(reducers ?? {}).includes(name)) {
            store.reducerManager.add(name, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        }

        return () => {
            if (isRemovable) {
                store.reducerManager.remove(name)
                dispatch({type: `@DESTROY ${name} reducer`})
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        
    }
}

export default useDynamicReducer