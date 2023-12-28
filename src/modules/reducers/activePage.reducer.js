import { createSlice } from "@reduxjs/toolkit"

export const activePageSlice = createSlice({
    name: 'activePage',
    initialState: { page: 2 },
    reducers: {
        increase(state) {
            state.page += 1
        },
        decrease(state) {
            state.page -= 1
        }
    }
})


export const actions = activePageSlice.actions