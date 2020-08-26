import * as yup from 'yup'

const loginFormSchema = yup.object().shape({

    username: yup
    .string()
    .required('Must include a username'),
    password: yup
    .string()
    .min(8, 'Password must be longer than 8 characters')
    .required('Password is required'),

})

export default loginFormSchema