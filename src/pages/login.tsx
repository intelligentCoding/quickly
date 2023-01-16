
import {User} from "@/types/user"
import {Maybe} from '@/types/maybe'
import { LoginForm } from "@/components/Form/LoginForm"
import Layout from "@/components/Layout/Layout"
import { GetServerSideProps } from "next"
const styles = {
  label: 'block text-pink-500 text-sm font-bold pt-2 pb-1',
  field:
    'bg-pink-100 text-pink-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-pink-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-pink-500',
  errorMsg: 'text-red-500 text-sm',
}
interface LoginPageProps {
  accessToken?: string,
  user: Maybe<User>
}

const LoginPage: React.FC<LoginPageProps> = ({}) => {

  return (
    <Layout page="page" title="Login Form">
      <LoginForm styles={styles}/>
    </Layout>
  )
}


export default LoginPage



