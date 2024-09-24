"use client";
import Image from "next/image";
import React, { FormEvent, useEffect } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import useFoodStore from "@/GlobalState/State";
import Link from "next/link";
export const Navbar = () => {
  const { Food } = useFoodStore();
  useEffect(() => {
    useFoodStore.persist.rehydrate();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { userId } = useAuth();
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-12 bg-yellow-50">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <Image src="/logo.avif" width={50} height={50} alt="logo" />
          <span className="ml-2 text-3xl font-mono font-bold tracking-wide text-yellow-900 uppercase">
            FeastKart
          </span>
        </a>
        <ul className="flex items-center space-x-8 lg:flex">
          <li>
            <a
              href="https://zomato-clone-admin.vercel.app"
              aria-label="I've a restaurant"
              title="I've a restaurant"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              I've a restaurant
            </a>
          </li>
          <li>
            <Link
              href="/CartPage"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Cart({Food.length}) 🛒
            </Link>
          </li>
          <li>
            <Link
              href="/Orders"
              aria-label="Orders"
              title="Orders"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Orders
            </Link>
          </li>
          {!userId ? (
            <Link href="/sign-up">
              <li
                className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                aria-label="Sign Up"
                title="Sign Up"
              >
                Sign Up
              </li>
            </Link>
          ) : (
            <UserButton afterSignOutUrl="/sign-in" />
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="z-50 absolute top-0 left-0 w-full ">
              <div className="p-5 bg-yellow-50 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <Image
                        src="/logo.avif"
                        width={50}
                        height={50}
                        alt="logo"
                      />
                      <span className="ml-2 text-2xl font-mono font-bold tracking-wide text-gray-800 uppercase">
                        Zomato Clone
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="https://zomato-clone-admin.vercel.app/"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="I've a restaurant"
                        title="I've a restaurant"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        I've a restaurant
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/CartPage"
                        aria-label="CartPage"
                        onClick={() => setIsMenuOpen(false)}
                        title="CartPage"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Cart({Food.length}) 🛒
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Orders"
                        aria-label="Orders"
                        onClick={() => setIsMenuOpen(false)}
                        title="Orders"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Orders
                      </Link>
                    </li>
                    {!userId ? (
                      <Link href="/sign-up">
                        <li
                          className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                          aria-label="Sign Up"
                          title="Sign Up"
                        >
                          Sign Up
                        </li>
                      </Link>
                    ) : (
                      <UserButton afterSignOutUrl="/sign-in" />
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
