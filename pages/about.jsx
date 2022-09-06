import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | {BLOG_NAME}</title>
      </Head>
      <Container>
        <PageHeading>Nice to meet you.</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <Image src="/assets/blog/authors/andydelso-avatar.jpg" alt='A picture of the author Andy Delso' width={300} height={400}/>
          <br />
          <br />
          <p>
            Hello! I&apos;m Andy Delso! I am a software developer with a primary focus on quality assurance. 
            Most recently, I worked for <Link href="https://m1.com/"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">M1</a></Link> as a Staff Test Engineer building out their Android automated test infrastructure. 
            Although recently, I was promoted to Mobile Engineer on the Android team! 
            I have been working on said infrastructure using Espresso and Firebase Test Lab. 
            I am eagerly looking forward to working more in the app itself!
          </p>
          <br />
          <p>
            As of August 2019 I am a <Link href="https://twitch.tv/ddaypunk"><a className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200">Twitch.tv affiliate</a></Link>! 
            Lately I have been streaming games like Call of Duty Warzone and Fall Guys, amongst others. 
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
              <li><b>Technologies</b>: Docker, React.js, Node.js, libgdx</li>
              <li><b>Tools</b>: Android Studio, IntelliJ, VSCode, Insomnia, Proxyman Git</li>
              <li><b>Operating Systems</b>: Windows, Mac, Android,iOS, Linux</li>
            </ul>
          </p>
          <br />
          <p>
            Last updated: 27 August 2022
          </p>
        </section>
      </Container>
    </Layout>
  )
}
