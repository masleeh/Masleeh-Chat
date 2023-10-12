import { Reducer } from "@reduxjs/toolkit";
import { useEffect } from "react"
import { useStore } from "react-redux";
import { useAppDispatch } from "./useAppDispatch";
import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/store";

const useDynamicReducer = (
    name: StateSchemaKey,
    reducer: Reducer,
    isRemovable: boolean = true
) => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        const reducers = store.reducerManager?.getReducerMap()
        if (!Object.keys(reducers ?? {}).includes(name)) {
            store.reducerManager!.add(name, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        }

        return () => {
            if (isRemovable) {
                store.reducerManager!.remove(name)
                dispatch({type: `@DESTROY ${name} reducer`})
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        
    }
}

export default useDynamicReducer