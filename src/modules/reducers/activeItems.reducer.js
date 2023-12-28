import { createSlice } from "@reduxjs/toolkit"

export const activeItemsSlice = createSlice({
    name: 'activePage',
    initialState: { page: 3, activeList: false, },
    reducers: {
        increase(state) {
            state.page += 1
        },
        decrease(state) {
            state.page -= 1
        },
        changeActiveList(state) {
            state.activeList = !state.activeList
        },
    }
})


export const actions = activeItemsSlice.actions