import { configureStore } from "@reduxjs/toolkit"
import { activePageSlice } from "./reducers/activePage.reducer"
import { courseFormSlice } from "./reducers/courseForm.reducer"

export const store = configureStore({
    reducer: {
        activePage: activePageSlice.reducer,
        courseForm: courseFormSlice.reducer
    }
})

