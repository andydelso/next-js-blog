import Container from '../components/Layout/Container'
import MoreStories from '../components/Home/MoreStories'
import HeroPost from '../components/Home/HeroPost'
import Intro from '../components/Home/Intro'
import Layout from '../components/Layout/Layout'
import { getAllPosts } from '../lib/api'
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const pageTitle = `Home | ${BLOG_NAME}`
  return (
    <>
      <Layout>
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:type" content="website" />
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
