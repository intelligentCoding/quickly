import * as Yup from 'yup'
export const signupSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name required'),
  last_name: Yup.string().required('Last Name required'),
  company_name: Yup.string().required('Last Name required'),
  email: Yup.string().email().required('Required valid email'),
  password: Yup.string().required('Password Required').min(3, 'Too Short!'),
  password_check: Yup.string().required('Must confirm password').oneOf([Yup.ref('password')], 'Your password must match'),
})