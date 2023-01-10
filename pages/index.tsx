import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Header from "../components/header";
import Banner from "../components/banner";
import Image from "next/image";
import {BiCopy} from "react-icons/bi";

type Props = {
  allPosts: Post[]
}

const topVoter = [
  { username: "CreeperEnergie", votecount: 69 },
  { username: "Toseflo96", votecount: 69 },
  { username: "Archerymaister", votecount: 420 },
  { username: "HolyAndOnly", votecount: 42 },
  { username: "LolNiki2000", votecount: 42 },
  { username: "Sordid_Blood", votecount: 69 },
  { username: "catobi", votecount: 69 },
  { username: "d1rty", votecount: 69 },
  { username: "Shebao", votecount: 69 },
  { username: "Schalunza", votecount: 69 },
]

const servers = [
  {
    servername: "Main",
    address: "main.cube-nation.de",
    version: "1.19.2",
  },
  {
    servername: "Creative",
    address: "creative.cube-nation.de",
    version: "1.19.2",
  },
  {
    servername: "Acid Island",
    address: "island.cube-nation.de",
    version: "1.19.2",
  },
  {
    servername: "Pandora",
    address: "pandora.cube-nation.de",
    version: "1.19.2",
  }
]

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Cube-Nation - Der Minecraft Server mit dem Wohlfühleffekt!</title>
        </Head>
        <Header />
        <Banner />
        <Container>
          <div className="hidden lg:flex relative justify-between w-full md:mb-16 -top-10">
            {servers.map(server => (
            <div className="flex-1 flex p-6 rounded-lg bg-white/60 dark:bg-midnight-700/60 backdrop-blur-lg drop-shadow-md h-min mx-5">
              <img src="/assets/block-uni.png" alt="Block" className="w-20 h-20"/>
              <div className="ml-2">
                <h5 className="text-xl leading-tight font-medium">{server.servername}</h5>
                <h5 className="text-sm leading-tight font-medium mb-2.5">Version {server.version}</h5>
                <button className="inline-block px-1 py-0.5 bg-gradient-to-r from-cn-d to-cn text-white dark:text-black font-medium text-sm leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                  {server.address}
                  <BiCopy className="inline-block h-3 ml-1 mb-0.5"/>
                </button>
              </div>
            </div>
            ))}
          </div>

          <div className="flex justify-between w-full my-8 md:my-16">

            <div className="mr-20">
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>

            <div className="hidden lg:block p-6 rounded-lg bg-gradient-to-r from-cn-d to-cn text-white dark:text-black drop-shadow-md max-w-sm h-min">
              <h5 className="text-xl leading-tight font-medium mb-2">Top-Voter der Woche</h5>
              <div className="flex justify-center">
                <ul className="rounded-lg w-96">
                  { topVoter.sort((a, b) => {
                    if (a.votecount < b.votecount) {
                      return 1
                    }
                    if (a.votecount > b.votecount) {
                      return -1
                    }
                    return 0
                  }).map((e, i) => (
                      <li className={`px-6 py-2 w-full ${i < topVoter.length-1 && "border-b border-white dark:border-black"}`}>
                        {e.username}: <span className="float-right">{e.votecount}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
