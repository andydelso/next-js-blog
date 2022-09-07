import Head from 'next/head'
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import Layout from '../components/Layout/Layout'
import Container from '../components/Layout/Container'
import ContactPage from '../components/Utils/ContactForm/ContactPage'
import PageHeading from '../components/PageHeading'

export default function Contact() {
  const pageTitle = `Contact | ${BLOG_NAME}`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
      </Head>
      <Container>
        <PageHeading>Let&apos;s connect.</PageHeading>
        <ContactPage />
      </Container>
    </Layout>
  )
}
