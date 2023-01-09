import { Popover, Transition } from '@headlessui/react'
import classNames from "classnames";
import {Fragment, useEffect, useState} from "react";
import Container from "./container";

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
            if (window.scrollY > 750) {
                setAnimateHeader(true);
            } else setAnimateHeader(false);
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

  return (
      <Popover className={`fixed w-full bg-white z-40 trasition ease-in-out duration-500 ${animateHeader && "backdrop-filter backdrop-blur-lg bg-white/20"}`}>
          <Container>
              <div className="mx-auto">
                  <div className={`flex items-center justify-between py-5 md:justify-start md:space-x-10 cartoon trasition ease-in-out duration-500`}>
                      <div className="flex justify-start lg:w-0 lg:flex-1">
                          <a href="#">
                              <span className="sr-only">Cube-Nation</span>
                              <img
                                  className="h-10 w-auto"
                                  src="/assets/cropped-cnlogoflat-4.png"
                                  alt=""
                              />
                          </a>
                          <div className="ml-4 flex flex-col justify-around leading-4 font-bold">
                              <span>cube-nation.de</span>
                              <span className="text-green-600">11 / 50 Online</span>
                          </div>
                      </div>
                      <div className="-my-2 -mr-2 md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Open menu</span>
                              Menu
                          </Popover.Button>
                      </div>
                      <Popover.Group as="nav" className="hidden space-x-10 md:flex">

                          <a href="#" className="text-lg font-bold black hover:text-gray-900">
                              Home
                          </a>

                          <Popover className="relative">
                              {({ open }) => (
                                  <>
                                      <Popover.Button
                                          className={classNames(
                                              open ? 'text-gray-900' : 'black',
                                              'group inline-flex items-center rounded-md text-lg font-bold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                          )}
                                      >
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

                          <a href="#" className="text-lg font-bold black hover:text-gray-900">
                              Wiki
                          </a>
                          <a href="#" className="text-lg font-bold black hover:text-gray-900">
                              Regeln
                          </a>

                          <Popover className="relative">
                              {({ open }) => (
                                  <>
                                      <Popover.Button
                                          className={classNames(
                                              open ? 'text-gray-900' : 'black',
                                              'group inline-flex items-center rounded-md text-lg font-bold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                          )}
                                      >
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
                          <a href="#" role="button text-black">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7">
                                  <path fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                              </svg>
                          </a>
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
