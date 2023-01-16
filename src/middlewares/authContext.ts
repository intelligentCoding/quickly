import { MAIN_PAGE } from "@/constants";
import { getAccessToken } from "@/store/accessToken";
import { MyGetServerSideProps } from "@/types/MyGetServerSideProps";
import { GetServerSideProps } from "next";

export const authContext = (gssp: MyGetServerSideProps): GetServerSideProps => {
  const fn: GetServerSideProps = async (context) => {
    const accessToken = getAccessToken()
    if(accessToken) {
      const routeToMainPage = {
        redirect: {
          redirect: {
            permanent: false,
            destination: MAIN_PAGE,
          },
          props: {},
        }
      }
    }
    return await gssp({...context, accessToken}) //Continue the call to getserversideprops
  }
  return fn
}