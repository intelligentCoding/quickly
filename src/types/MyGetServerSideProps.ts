import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { MyContext } from './MyContext'
import { ParsedUrlQuery } from 'querystring'

export type MyGetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (
  context: GetServerSidePropsContext<Q> & MyContext
) => Promise<GetServerSidePropsResult<P>>