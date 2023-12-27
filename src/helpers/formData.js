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
    { id: uuid(), type: 'text', name: "email", label: 'Email', required: true }
]

const formValidate = (purchase) => {
    const errors = {}

    formFields.forEach(field => {
        const newErrorMessage = fieldValidate(field, purchase)

        if (typeof newErrorMessage !== 'undefined') {
            errors[field.name] = []
            errors[field.name].push(fieldValidate(field, purchase))
        }
    })
    return errors
}

const fieldValidate = (field, purchase) => {
    let error
    const { name, pattern, required } = field

    const value = purchase[name]

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