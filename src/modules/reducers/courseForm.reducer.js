import { createSlice } from "@reduxjs/toolkit"

export const courseFormSlice = createSlice({
    name: 'courseForm',
    initialState: {
        engLevel: 'A0 - Beginner',
        activeList: false,
        pickedCourse: '',
        formState: ''
    },
    reducers: {
        changeActiveList(state) {
            state.activeList = !state.activeList
        },
        setEngLevel(state, action){
            state.engLevel = action.payload
        }
        // increase(state) {
        //     state.activePage += 1
        // },
        // decrease(state) {
        //     state.activePage -= 1
        // }
    }
})


export const actions = courseFormSlice.actions