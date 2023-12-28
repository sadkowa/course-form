import { createSlice } from "@reduxjs/toolkit"

export const activePageSlice = createSlice({
    name: 'activePage',
    initialState: { activePage: 1 },
    reducers: {
        increase(state) {
            state.activePage += 1
        },
        decrease(state) {
            state.activePage -= 1
        }
    }
})


export const actions = activePageSlice.actions