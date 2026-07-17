import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import { getPage } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/Portfolio/ProjectCard'
import PortfolioBody from '../components/Portfolio/PortfolioBody'

export default function Portfolio({ content }) {
  const pageTitle = `Portfolio | ${BLOG_NAME}`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
      </Head>
      <Container>
        <PageHeading>Forging a Path.</PageHeading>
        <PortfolioBody content={content} />
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Sprout Social"
              description="As an Android Engineer, my work included rebuilding engagement features, settings, and converting the navigation drawer to a bottom bar with an overflow menu. I also drove numerous accessibility updates to comply with WCAG 2.1 AA and made various improvements to the design system."
              imageUrl=""
              href="https://play.google.com/store/apps/details?id=com.sproutsocial.android&hl=en&pli=1"
            />
            <ProjectCard
              title="M1 Finance"
              description="I was fortunate enough to work on a number of aspects of the M1 app. I was a part of updating all aspects of the branding including theming, typography, and iconography throughout the app. I was on a team building out the savings account offering from start to finish that used a working including test-driven development and pair programming."
              imageUrl=""
              href="https://play.google.com/store/apps/details?id=com.m1finance.android"
            />
            <ProjectCard
              title="Marvelous Companion"
              description="An unofficial companion app for the Marvel United board game, currently featuring a glossary for looking up game sets and characters. Future plans include a game wizard and achievements tracking. Currently in closed testing on both app stores; repo is private for now."
              imageUrl=""
            />
            <ProjectCard
              title="Aperture"
              description="Allows you to track your cinamtic journey through the Oscar nominees in the Best Picture category and beyond! Utilizes cutting-edge technologies such as Kotlin Multiplatform along with Jetpack Compose and Swift UI, SQLDelight,and Koin. Stay tuned for a release to the Play and App Stores in the near future!"
              imageUrl=""
              href=""
            />
            <ProjectCard
              title="Datapad 5e"
              description="Provides a quick way to reference you Star Wars 5e Tech and Force Powers for your journeys &apos;in a galaxy far, far away&apos;! Utilizes cutting-edge technologies such as Kotlin Multiplatform along with Jetpack Compose and Swift UI, Ktor, and Dagger|Hilt. Stay tuned for a release to the Play and App Stores in the near future!"
              />        
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = getPage('portfolio')
  const content = await markdownToHtml(page.content || '')

  return {
    props: {
      content,
    },
  }
}
