import * as yup from 'yup'

const signupFormSchema = yup.object().shape({

    username: yup
    .string()
    .required('Must include a username'),
    email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address') ,
    password: yup
    .string()
    .min(8, 'Password must be longer than 8 characters')
    .required('Password is required'),

})

export default signupFormSchema