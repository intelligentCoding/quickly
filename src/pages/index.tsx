import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Quickly Assignment Home Page">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </Layout>
  )
}
