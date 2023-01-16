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
  user: Maybe<User>
}

export const Layout: FunctionComponent<LayoutProps> = (props) => {
  const {
    children,
    description,
    header,
    title,
    page,
  } = props

  return (
    <>
    <Head>
    <meta name="title" content={title} />
        {description ? <meta name="description" content={description} /> : null}
        <meta name="Kashif Mahmood" content="Quikly Assignment" />
        {/* Other SEO should be here */}
    </Head>
    {/* Header will be sent or we will show a common header (non-auth) */}
            <div>{children}</div>

    </>
    
  )
}
export default Layout
