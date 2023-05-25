import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup.string().trim().required('Username is Required!').min(3, 'Username must be atleast 3 characters long.'),
    email: yup.string().email('Must be a valid email address').required('Email is Required!'),
    password: yup.string().min(7, 'Must be atleast 7 characters long').required('Password is Required!'),
    tos: yup.boolean().oneOf([true], 'You must accept the Terms of Service before proceeding.')



})