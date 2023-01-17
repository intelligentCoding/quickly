import {User} from "@/types/user"
import {Maybe} from '@/types/maybe'
import { LoginForm } from "@/components/Form/LoginForm"
import Layout from "@/components/Layout/Layout"
import { GetServerSideProps } from "next"
import { authContext } from "@/middlewares/authContext"
import { SignupForm } from "@/components/Form/SignupForm"
const styles = {
  label: 'block text-pink-500 text-sm font-bold pt-2 pb-1',
  field:
    'bg-pink-100 text-pink-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-pink-700 disabled:opacity-50 text-white font-bold py-2 px-4 w-full rounded hover:bg-pink-500',
  errorMsg: 'text-red-500 text-sm',
}
interface SignupPageProps {
  accessToken?: string,
  user: Maybe<User>
}

const SignupPage: React.FC<SignupPageProps> = ({accessToken}) => {
  console.log(accessToken)
  return (
    <Layout page="login" title="Login Form">
      <SignupForm styles={styles}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = authContext(
  async (context) => {
    const {accessToken} = context
    return {
      props: {
        accessToken: accessToken || null
      }
    }
  }
)

export default SignupPage