import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import PageHeading from '../components/PageHeading'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
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
        <PageHeading>Nice to meet you.</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <Image src="/assets/blog/authors/andydelso-avatar.jpg" alt='A picture of the author Andy Delso' width={300} height={400}/>
          <br />
          <br />
          <p>
            Hello! I&apos;m Andy Delso! I am a software developer with a focus on quality Android applications. 
            Currently, I work for <Link href="https://m1.com/"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">M1</a></Link> as a recently promoted to Mobile Engineer on the Android team! 
            Previously, I had been working on their infrastructure using Espresso and Firebase Test Lab as a Staff Test Engineer. 
            My projects latley have included working on our updated branding and user experience projects in the Android app!
            During our most recent Hackathon, I had the privilage of building out our Client Support feature, which was a super fun learning experience!
          </p>
          <br />
          <p>
            While this blog is my main form of content generation, I also post it to my socials. 
            More recently I stepped away from Twitter for reasons many users have. Thus I use <Link rel="me" href="https://androiddev.social/@andy"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">Mastodon</a></Link> instead.
            I also cross post primarily to <Link href="https://dev.to/ddaypunk"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">Dev.to</a></Link> and sometimes <Link href="https://medium.com/@thedelso"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">Medium</a></Link>
          </p>
          <br />
          <p>
            As of August 2019 I am a <Link href="https://twitch.tv/ddaypunk"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">Twitch.tv affiliate</a></Link>! 
            Lately I have been streaming games like Call of Duty Warzone but would like to get back to some solo streams with games like God of War Ragnarok or Assassin&apos;s Creed. 
            I tend to enjoy playing games with people, but I enjoy chatting with folks while gaming as well. 
            I primarily like games with interesting stories and compelling gameplay such as The Last of Us, but I also enjoy team based FPS games like Overwatch.
          </p>
          <br />
          <p>
          Outside of my profession and streaming, I also enjoy: 
          <ul>
            <li>&bull; playing guitar (alt. rock, pop punk)</li>
            <li>&bull; sketching (pencil, pixels)</li>
            <li>&bull; reading (sci-fi, technical)</li>
            <li>&bull; painting and playing miniature war-games (WarmaHordes, Malifaux, X-Wing)</li>
            <li>&bull; and doing fun things with my family (Legos, photography, boardgames, travel)</li>
            <li></li>
          </ul>
          </p>
          <br />
          <p>
            <ul>
              <li><b>Languages</b>: Kotlin, Java, JavaScript, Groovy, Python</li>
              <li><b>Automation</b>: Espresso, Playwright, Selenium, Appium, JUnit, RestAssured, Wiremock, Geb, Spock</li>
              <li><b>Technologies</b>: Android, Jetpack, Docker, React.js, Node.js, libgdx</li>
              <li><b>Tools</b>: Android Studio, IntelliJ, VSCode, Insomnia, Proxyman Git</li>
              <li><b>Operating Systems</b>: Windows, Mac, Android,iOS, Linux</li>
            </ul>
          </p>
          <br />
          <p>
            Last updated: 2 December 2022
          </p>
        </section>
      </Container>
    </Layout>
  )
}
