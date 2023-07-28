import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Modal isOpen title='Test Modal' />
    <Layout>
      <Head >
        <title>Bacarita</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  </>
}
