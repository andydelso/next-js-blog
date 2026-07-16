import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import { getPage } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import PageHeading from '../components/PageHeading'
import AboutBody from '../components/About/AboutBody'
import DateFormatter from '../components/Utils/DateFormatter'
import Image from 'next/image'

export default function About({ content, date }) {
  const pageTitle = `About | ${BLOG_NAME}`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
      </Head>
      <Container>
        <PageHeading>Hello There.</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <div style={{ float: 'left', marginRight: '20px' }}>
            <Image src="/assets/blog/authors/andydelso-avatar.jpg" alt='A picture of the author Andy Delso' width={300} height={400}/>
          </div>
          <div>
            <AboutBody content={content} />
            <p>
              <i>Last updated: <DateFormatter dateString={date} /></i>
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = getPage('about')
  const content = await markdownToHtml(page.content || '')

  return {
    props: {
      content,
      date: page.date,
    },
  }
}
