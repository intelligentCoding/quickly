import { Formik, Field, Form, ErrorMessage } from 'formik'
import { loginSchema } from '@/components/validation/loginSchema'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setAccessToken } from '@/store/accessToken';
import { useCookies } from "react-cookie"
import { LoadingContainer } from '@/components/LoadingContainer';
import { usePageLoading } from '@/hooks/usePageLoading';

interface LoginFormProps {
  styles: {
    label: string;
    field: string;
    button: string;
    errorMsg: string;
  }
}
export const LoginForm: React.FC<LoginFormProps> = ({ styles }) => {
  const router = useRouter()
  const [cookie, setCookie] = useCookies(["token"])
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const pageLoading = usePageLoading()
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          try {
            setloading(true)
            const response = await axios.post('https://api-dev.quicklyinc.com/auth/login', {
              email: values.email,
              password: values.password
            })
            setloading(false)
            //in case the status codce is 400 and yet success is false
            if(response.data.success === false) {
              seterror(response.data.message)
            }
            if(response.data.success === true) {
              setAccessToken(response.data.token)
              setCookie("token", response.data.token, {
                path: "/",
                maxAge: 3600, // Expires after 1hr
                sameSite: true,
              })
              router.push('/profile')
            }
          } catch (error: any) {
            setloading(false)
            seterror(error.response.data.message)
          }
        }}
      >
        {(formik) => {
          const { errors, isSubmitting, values, dirty, isValid } = formik
          const submitDisabled = Object.keys(errors).length > 0 || !(dirty && isValid)//Need to also disable when making login call. 
          return (
            <LoadingContainer loading={loading || pageLoading}>
            <div>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Login Failed</strong>
                  {` `}
                  <span className="block sm:inline">{error}</span>

                </div>
              )}
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
            </div>
            </LoadingContainer>
          )
        }}
      </Formik>
    </>
  )
}