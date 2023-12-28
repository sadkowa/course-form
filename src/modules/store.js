import { configureStore } from "@reduxjs/toolkit"
import { activePageSlice } from "./reducers/activePage.reducer"

export const store = configureStore({
    reducer: activePageSlice.reducer
})

