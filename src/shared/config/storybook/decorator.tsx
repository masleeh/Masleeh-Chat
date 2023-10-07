import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { IStateSchema, StoreProvider } from 'app/providers/store'

const Decorator = ({
    children,
    initialState
} : {
        children: React.ReactNode, 
        initialState?: IStateSchema
    }) => (
    <BrowserRouter>
        <StoreProvider initialState={initialState}>
            {children}
        </StoreProvider>
    </BrowserRouter>
)

export default Decorator