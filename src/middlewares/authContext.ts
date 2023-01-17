import { MAIN_PAGE } from "@/constants";
import { getAccessToken } from "@/store/accessToken";
import { MyGetServerSideProps } from "@/types/MyGetServerSideProps";
import { GetServerSideProps } from "next";

export const authContext = (gssp: MyGetServerSideProps): GetServerSideProps => {
  const fn: GetServerSideProps = async (context) => {
    const {token: accessToken} = context.req.cookies || null
    if(accessToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/profile'
        }
      }
    }
    return await gssp({...context, accessToken}) //Continue the call to getserversideprops
  }
  return fn
}