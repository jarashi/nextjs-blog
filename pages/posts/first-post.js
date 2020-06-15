import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/layout'

const Heading = styled.h1`
    font-family: SST;
    font-weight: 300;
`

export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
          <Heading>First Post</Heading>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </Layout>
      )
}