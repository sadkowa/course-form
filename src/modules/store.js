import { configureStore } from "@reduxjs/toolkit"
import { activeItemsSlice } from "./reducers/activeItems.reducer"
import { courseFormSlice } from "./reducers/courseForm.reducer"

export const store = configureStore({
    reducer: {
        activeItems: activeItemsSlice.reducer,
        courseForm: courseFormSlice.reducer
    }
})

