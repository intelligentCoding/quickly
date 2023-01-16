import * as Yup from 'yup'
export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Required valid email'),
  password: Yup.string().required('Password Required').min(3, 'Too Short!'),
})