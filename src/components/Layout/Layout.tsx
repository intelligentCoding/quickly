import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import Head from 'next/head'
import {Header} from '@/components/Layout/Header'
import { Maybe } from '@/types/maybe'
import { User } from '@/types/user'
export interface LayoutProps {
  children: ReactNode
  description?: string
  header?: ReactNode
  title: string
  page?: string
  user?: Maybe<User>
}

export const Layout: FunctionComponent<LayoutProps> = (props) => {
  const {
    children,
    description,
    header,
    title,
    page,
    user
  } = props

  return (
    <>
    <Head>
    <meta name="title" content={title} />
        {description ? <meta name="description" content={description} /> : null}
        <meta name="Kashif Mahmood" content="Quikly Assignment" />
        {/* Other SEO should be here */}
    </Head>
    {typeof header !== 'undefined' ? (
        header
      ) : (
        <Header page={page} user={user}/>
      )}
            <div>{children}</div>

    </>
    
  )
}
export default Layout
