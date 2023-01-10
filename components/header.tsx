import { Popover, Transition } from '@headlessui/react'
import classNames from "classnames";
import {Fragment, useEffect, useState} from "react";
import Container from "./container";
import {FaDiscord} from "react-icons/fa";

const server = [
    {
        name: 'Main',
        description: 'Survivalserver mit Bau- und Farmwelten',
        href: '#',
    },
    {
        name: 'Creative',
        description: 'Plotwelt für deine kreativen Projekte',
        href: '#',
    },
    {
        name: 'Acid Island',
        description: "Skyblock im Säuremeer",
        href: '#',
    },
    {
        name: 'Pandora',
        description: 'Das authentische Vanilla-Erlebnis',
        href: '#',
    },
]
const callsToAction = [
    { name: 'Discord', href: '#' },
    { name: 'TeamSpeak', href: '#' },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

const Header = () => {
    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        const listener = () => {
            console.log(window.scrollY);
            if (window.scrollY > 20) {
                setAnimateHeader(true);
            } else setAnimateHeader(false);
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

  return (
      <Popover className="fixed w-full bg-white/60 dark:bg-midnight/60 backdrop-filter backdrop-blur-lg z-40">
          <Container>
              <div className="mx-auto">
                  <div className={`flex items-center justify-between py-5 md:justify-start md:space-x-10 cartoon trasition ease-in-out duration-500`}>
                      <div className="flex justify-start lg:w-0 lg:flex-1">
                          <a href="#">
                              <span className="sr-only">Cube-Nation</span>
                              <img
                                  className="w-10 h-10"
                                  src="/assets/cropped-cnlogoflat-4.png"
                                  alt=""
                              />
                          </a>
                          <div className="ml-4 flex flex-col justify-around leading-5 font-bold">
                              <button className="inline-block px-1 pt-0.5 bg-gradient-to-r from-cn-d to-cn text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                                  cube-nation.de
                                  {/*<BiCopy className="inline-block h-3 ml-1 mb-0.5"/>*/}
                              </button>
                              <span>11 / 50 Online</span>
                          </div>
                      </div>
                      <div className="-my-2 -mr-2 md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Open menu</span>
                              Menu
                          </Popover.Button>
                      </div>
                      <Popover.Group as="nav" className="hidden space-x-10 md:flex">

                          <Popover className="relative">
                              {({ open }) => (
                                  <>
                                      <Popover.Button className="group inline-flex items-center rounded-md text-lg font-bold hover:underline decoration-4 underline-offset-8 decoration-green-500 focus:outline-none">
                                          <span>Unsere Server</span>
                                      </Popover.Button>

                                      <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-200"
                                          enterFrom="opacity-0 translate-y-1"
                                          enterTo="opacity-100 translate-y-0"
                                          leave="transition ease-in duration-150"
                                          leaveFrom="opacity-100 translate-y-0"
                                          leaveTo="opacity-0 translate-y-1"
                                      >
                                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                      {server.map((item) => (
                                                          <a
                                                              key={item.name}
                                                              href={item.href}
                                                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                          >
                                                              <div className="ml-4">
                                                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                              </div>
                                                          </a>
                                                      ))}
                                                  </div>
                                                  <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                      {callsToAction.map((item) => (
                                                          <div key={item.name} className="flow-root">
                                                              <a
                                                                  href={item.href}
                                                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                                              >
                                                                  <span className="ml-3">{item.name}</span>
                                                              </a>
                                                          </div>
                                                      ))}
                                                  </div>
                                              </div>
                                          </Popover.Panel>
                                      </Transition>
                                  </>
                              )}
                          </Popover>

                          <a href="#" className="text-lg font-bold hover:underline decoration-4 underline-offset-8 decoration-green-500">
                              Wiki
                          </a>
                          <a href="#" className="text-lg font-bold hover:underline decoration-4 underline-offset-8 decoration-green-500">
                              Regeln
                          </a>

                          <Popover className="relative">
                              {({ open }) => (
                                  <>
                                      <Popover.Button className="group inline-flex items-center rounded-md text-lg font-bold hover:underline decoration-4 underline-offset-8 decoration-green-500 focus:outline-none">
                                          <span>FAQ</span>
                                      </Popover.Button>

                                      <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-200"
                                          enterFrom="opacity-0 translate-y-1"
                                          enterTo="opacity-100 translate-y-0"
                                          leave="transition ease-in duration-150"
                                          leaveFrom="opacity-100 translate-y-0"
                                          leaveTo="opacity-0 translate-y-1"
                                      >
                                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                      {resources.map((item) => (
                                                          <a
                                                              key={item.name}
                                                              href={item.href}
                                                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                          >
                                                              <div className="ml-4">
                                                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                              </div>
                                                          </a>
                                                      ))}
                                                  </div>
                                                  <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                                      <div>
                                                          <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                                                          <ul role="list" className="mt-4 space-y-4">
                                                              {recentPosts.map((post) => (
                                                                  <li key={post.id} className="truncate text-base">
                                                                      <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                          {post.name}
                                                                      </a>
                                                                  </li>
                                                              ))}
                                                          </ul>
                                                      </div>
                                                      <div className="mt-5 text-sm">
                                                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                              View all posts
                                                              <span aria-hidden="true"> &rarr;</span>
                                                          </a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </Popover.Panel>
                                      </Transition>
                                  </>
                              )}
                          </Popover>
                      </Popover.Group>
                      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                          <span className="hidden md:inline leading-4 mr-4 text-right">Tritt unserem <br/>Discord bei!</span>
                          <button className="inline-block p-1 bg-black dark:bg-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-760 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg transition duration-150 ease-in-out">
                              <FaDiscord className="text-3xl text-white dark:text-midnight"/>
                          </button>
                      </div>
                  </div>
              </div>

              <Transition
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
              >
                  <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="px-5 pt-5 pb-6">
                              <div className="flex items-center justify-between">
                                  <div>
                                      <img
                                          className="h-8 w-auto"
                                          src="/assets/cropped-cnlogoflat-4.png"
                                          alt="Cube-Nation"
                                      />
                                  </div>
                                  <div className="-mr-2">
                                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                          <span className="sr-only">Close menu</span>
                                          X
                                      </Popover.Button>
                                  </div>
                              </div>
                              <div className="mt-6">
                                  <nav className="grid gap-y-8">
                                      {server.map((item) => (
                                          <a
                                              key={item.name}
                                              href={item.href}
                                              className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                          >
                                              <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                          </a>
                                      ))}
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </Popover.Panel>
              </Transition>
          </Container>
      </Popover>
  )
}

export default Header
