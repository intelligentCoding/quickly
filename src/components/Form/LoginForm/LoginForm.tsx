import { Formik, Field, Form, ErrorMessage } from 'formik'
import { loginSchema } from '@/components/validation/loginSchema'
interface LoginFormProps {
  styles: {
    label: string;
    field: string;
    button: string;
    errorMsg: string;
  }
}
export const LoginForm: React.FC<LoginFormProps> = ({ styles }) => (
  <>
    <Formik
      initialValues={{
          email: '',
          password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {(formik) => {
        const { errors, isSubmitting, values, dirty, isValid } = formik
        const submitDisabled = Object.keys(errors).length > 0 || !(dirty && isValid)//Need to also disable when making login call. 
        console.log(values.email)
        console.log(Object.keys(errors).length)
        return (
          <Form>
            <label className={styles.label} htmlFor='Email'>
              Email
            </label>
            <Field className={styles.field} id='email' name='email' />
            <ErrorMessage component='a' className={styles.errorMsg} name='email' />
            <label className={styles.label} htmlFor='Email'>
              Password
            </label>
            <Field className={styles.field} id='password' name='password' />
            <ErrorMessage
              component='a'
              className={styles.errorMsg}
              name='password'
            />
            <div className='mt-8'>
              <button type="submit" disabled={submitDisabled} className={styles.button}>
                Login
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  </>
)