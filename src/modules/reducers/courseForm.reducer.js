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
        },
        pickCourse(state, action) {
            state.pickedCourse = action.payload
        }

    }
})


export const actions = courseFormSlice.actions