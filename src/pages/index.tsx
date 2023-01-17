import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout/Layout'
import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { requireAuthentication } from '@/middlewares/requireAuthentication'
import { Maybe } from 'yup/lib/types'
import { User } from '@/types/user'
import { usePageLoading } from '@/hooks/usePageLoading'
import { LoadingContainer } from '@/components/LoadingContainer'

interface HomeProps {
  accessToken: string
  user: Maybe<User>
}
export const Home: NextPage<HomeProps> = ({user, accessToken})  =>{
  const pageLoading = usePageLoading()
  console.log(pageLoading)
  return (
    <LoadingContainer loading={pageLoading}>
    <Layout page={"notProfile"} user={user} title="Quickly Assignment Home Page">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </Layout>
    </LoadingContainer>
  )
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    const { accessToken, user } = context
    return {
      props: {
        accessToken: accessToken || null,
        user: user || null
      }
    }
  }, false
)

export default Home
