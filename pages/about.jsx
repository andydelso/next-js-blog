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
        <PageHeading>Hello There.</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <div style={{ float: 'left', marginRight: '20px' }}>
            <Image src="/assets/blog/authors/andydelso-avatar.jpg" alt='A picture of the author Andy Delso' width={300} height={400}/>
          </div>
          <div>
            <p>
              Hey there! I&apos;m Andrew Delso, but you can just call me Andy. I&apos;m passionate about mobile application development, specializing in Android with a keen eye for quality.
            </p>
            <br />
            <p>
              Currently, I&apos;m on a journey of self-improvement after recently transitioning from my role at <Link href="https://m1.com/"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">M1</a></Link>. During this time, I&apos;ve been dedicated to filling any experience gaps, diving into exciting areas like Kotlin Multiplatform and Jetpack Compose UI to sharpen my skills.
            </p>
            <br />
            <p>
              My journey into Android development began at M1, where I transitioned from a Staff Test Engineer to a Mobile Engineer II on the Android team. There, I played a pivotal role in projects like updating branding and building our savings account offering, showcasing my dedication and drive for excellence.
            </p>
            <br />
            <p>
              While at M1, I paticipated on various hackathon teams, working on projects like enhancing client support features to implementing innovative solutions like API-driven localization.
            </p>
            <br />
              <p>For a deeper dive into my projects, check out my Portfolio page!</p>
            <br />
            <p>
              Beyond development, I&apos;m an aspiring content creator, sharing my insights and experiences on platforms like <Link href="https://dev.to/ddaypunk"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">Dev.to</a></Link> and <Link rel="me" href="https://androiddev.social/@andy"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">Mastodon</a></Link>. And yes, you also can catch me on <Link href="https://twitch.tv/ddaypunk"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">Twitch.tv</a></Link> as <b>ddaypunk</b>, where I unwind with games like Call of Duty Warzone or dive into captivating narratives like God of War Ragnarok.
            </p>
            <br />
            <p>
              When I&apos;m not coding or gaming, you&apos;ll find me strumming my guitar, sketching, or lost in the pages of a sci-fi novel. I also have a soft spot for miniature war-games and enjoy quality time with my family, whether it&apos;s building Lego masterpieces or capturing moments through photography.
            </p>
            <br />
            <p>
              <ul>
                <li><b>Languages</b>: Kotlin, Java, JavaScript, Groovy, Python</li>
                <li><b>Automation</b>: Espresso, Playwright, Selenium, Appium, JUnit, RestAssured, Wiremock, Geb, Spock</li>
                <li><b>Technologies</b>: Android, Jetpack, Kotlin Multiplatform, Docker, React.js, Node.js, libgdx</li>
                <li><b>Tools</b>: Android Studio, IntelliJ, VSCode, Insomnia, Proxyman Git</li>
                <li><b>Operating Systems</b>: Windows, Mac, Android,iOS, Linux</li>
                <li>I do have some exposure to the <b>iOS ecosystem</b> as well given using Kotlin Multiplatform to build apps. Specifically, I can find my way around XCode, SwiftUI and XCUITest.</li>
              </ul>
            </p>
            <br />
            <p>
              <i>Last updated: 23 April 2024</i>
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  )
}
