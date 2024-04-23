import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/Portfolio/ProjectCard'

export default function Portfolio() {
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
        <p>
          As a mobile developer, I&apos;ve had the privilege of contributing to a diverse array of projects, each offering invaluable learning experiences. While my professional journey has included significant involvement in one project, I&apos;ve also dedicated my time to personal initiatives aimed at broadening my expertise.
          <br/><br/>
          Through continuous learning and hands-on practice, I&apos;ve crafted various small-scale applications. These range from projects inspired by educational resources like <i>Head First Android Development: 2nd Ed.</i> to comprehensive courses by instructors such as Philipp Lackner. Each endeavor has not only reinforced my understanding of Android development but has also ignited a passion for crafting innovative solutions.
        </p>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Aperture"
              description="Allows you to track your cinamtic journey through the Oscar nominees in the Best Picture category and beyond! Utilizes cutting-edge technologies such as Kotlin Multiplatform along with Jetpack Compose and Swift UI, SQLDelight,and Koin. Stay tuned for a release to the Play and App Stores in the near future!"
              imageUrl=""
              href="https://github.com/ddaypunk/aperture"
            />
            <ProjectCard
              title="Datapad 5e"
              description="Provides a quick way to reference you Star Wars 5e Tech and Force Powers for your journeys &apos;in a galaxy far, far away&apos;! Utilizes cutting-edge technologies such as Kotlin Multiplatform along with Jetpack Compose and Swift UI, Ktor, and Dagger|Hilt. Stay tuned for a release to the Play and App Stores in the near future!"
              />
            <ProjectCard
              title="M1 Finance"
              description="I was fortunate enough to work on a number of aspects of the M1 app. I was a part of updating all aspects of the branding including theming, typography, and iconography throughout the app. I was on a team building out the savings account offering from start to finish that used a working including test-driven development and pair programming."
              imageUrl=""
              href="https://play.google.com/store/apps/details?id=com.m1finance.android"
            />
          </div>
        </section>
      </Container>
    </Layout>
  )
}
