import { v4 as uuid } from "uuid";

const initState = {
    engLevel: "A0 - Beginner",
    pickedCourse: '',
    userData: {
        firstName: '',
        lastName: '',
        email: ''
    }
}

const userDataFields = [
    { id: uuid(), type: 'text', name: "firstName", label: 'First Name', required: true },
    { id: uuid(), type: 'text', name: "lastName", label: 'Last Name', required: true },
    { id: uuid(), type: 'text', name: "email", label: 'Email', required: true, pattern: /^[-\w.]+@([-\w]+\.)+[a-z]+$/i }
]

const formValidate = data => {
    const errors = {}

    userDataFields.forEach(field => {
        const newErrorMessage = fieldValidate(field, data)

        if (typeof newErrorMessage !== 'undefined') {
            errors[field.name] = []
            errors[field.name].push(fieldValidate(field, data))
        }
    })
    return errors
}

const fieldValidate = (field, data) => {
    let error
    const { name, pattern, required } = field

    const value = data[name]

    if (required) {
        if (value.length === 0) {
            error = `This field is required`
        } else {
            if (pattern) {
                const test = pattern.test(value)
                if (!test) {
                    error = `Correct the entered data`
                }
            }
        }
    }

    return error
}

export { initState, userDataFields, formValidate, fieldValidate}