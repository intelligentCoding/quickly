import Layout from "@/components/Layout/Layout"
import { requireAuthentication } from "@/middlewares/requireAuthentication"
import { Maybe } from "@/types/maybe"
import { User } from "@/types/user"
import { GetServerSideProps } from "next"

interface ProfilePageProps {
  accessToken: string
  user: Maybe<User>
}
const capitalize = (name: string) => {
  const lowerCaseName = name.toLowerCase()
  return lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)
}
const ProfilePage: React.FC<ProfilePageProps> = ({ user, accessToken }) => {
  console.log(user)
  return (
    <Layout user={user} title="Profile Page">
      <div className="flex">
            <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="px-5">
              <h1 className="text-5xl font-bold text-purple-900">{capitalize(user!.first_name)}{` `} {capitalize(user!.last_name)}</h1>
              <p className="py-6">Company Id: {` `}{user?.CompanyId}</p>
            </div>
      </div>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    const { accessToken, user } = context
    return {
      props: {
        accessToken,
        user
      }
    }
  }, true
)
export default ProfilePage