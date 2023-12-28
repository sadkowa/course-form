import { createSlice } from "@reduxjs/toolkit"

export const courseFormSlice = createSlice({
    name: 'courseForm',
    initialState: {
        engLevel: 'A0 - Beginner',
        pickedCourse: '',
        formState: ''
    },
    reducers: {
        setEngLevel(state, action){
            state.engLevel = action.payload
        },
        pickCourse(state, action) {
            state.pickedCourse = action.payload
        },
        setStudentData(state, action){
            state.formState = action.payload
        }
    }
})


export const actions = courseFormSlice.actions