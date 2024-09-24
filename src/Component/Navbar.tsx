"use client";
import Image from "next/image";
import React, { useEffect } from "react";
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
        {/* Logo */}
        <Link href="/" aria-label="Company" title="Company" className="inline-flex items-center">
          <Image src="/logo.avif" width={50} height={50} alt="logo" />
          <span className="ml-2 text-2xl md:text-3xl font-mono font-bold tracking-wide text-yellow-900 uppercase">
            FeastKart
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a href="https://feastkart-admin.vercel.app" className="font-medium text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              I've a restaurant
            </a>
          </li>
          <li>
            <Link href="/CartPage" className="font-medium text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Cart({Food.length}) 🛒
            </Link>
          </li>
          <li>
            <Link href="/Orders" className="font-medium text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              Orders
            </Link>
          </li>
          {!userId ? (
            <Link href="/sign-up">
              <li className="py-2 px-4 rounded-full text-center bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400">
                Sign Up
              </li>
            </Link>
          ) : (
            <UserButton afterSignOutUrl="/sign-in" />
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50 bg-yellow-50">
              <div className="p-5 border rounded shadow-sm">
                {/* Close Menu */}
                <div className="flex items-center justify-between mb-4">
                  <Link href="/" aria-label="Company" title="Company" className="inline-flex items-center">
                    <Image src="/logo.avif" width={50} height={50} alt="logo" />
                    <span className="ml-2 text-2xl font-mono font-bold tracking-wide text-gray-800 uppercase">
                      FeastKart
                    </span>
                  </Link>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 transition duration-200 rounded hover:bg-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-6 text-gray-600" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19.7,4.3c-0.4-0.4,1-0.4,1.4,0l6.3,6.3l-6.3,6.3c-0.4,0.4,0.4,1-1.4,0" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="https://feastkart-admin.vercel.app"
                        className="font-medium text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        I've a restaurant
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/CartPage"
                        className="font-medium text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Cart({Food.length}) 🛒
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Orders"
                        className="font-medium text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Orders
                      </Link>
                    </li>
                    {!userId ? (
                      <Link href="/sign-up">
                        <li className="py-2 px-6 rounded-full text-center bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400">
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
