import { getAccessToken } from "@/store/accessToken";
import { MyGetServerSideProps } from "@/types/MyGetServerSideProps";
import axios from "axios";
import { GetServerSideProps } from "next";

export const requireAuthentication = (
  gssp: MyGetServerSideProps,
): GetServerSideProps => {
  const fn: GetServerSideProps = async (context) => {
    const routeToLoginProps = {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    }
    const {token: accessToken} = context.req.cookies
    if(!accessToken || accessToken === null) {
      return routeToLoginProps
    }
    
    //getch user
      const response = await axios.get('https://api-dev.quicklyinc.com/auth/user', {
        headers: {
          Authorization : `Bearer ${accessToken}`
        }
      })
      // redirect if no user
      if(!response.data.user) {
        return routeToLoginProps
      }
      return await gssp({...context, accessToken, user: response.data.user})
  }
  return fn
}