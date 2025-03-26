import React from 'react'
import { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to our platform',
  openGraph: mergeOpenGraph({
    title: 'Home',
    description: 'Welcome to our platform',
  }),
}

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Welcome to Our Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              A powerful, flexible, and production-ready solution built with Payload CMS
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                Learn more
              </a>
              <a
                href="/contact"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200"
              >
                Contact us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transition-all duration-200 hover:shadow-xl">
              <div className="h-12 w-12 rounded-md bg-indigo-500 text-white flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Lightning Fast</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Built with performance in mind using Next.js and Payload CMS.</p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transition-all duration-200 hover:shadow-xl">
              <div className="h-12 w-12 rounded-md bg-indigo-500 text-white flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Flexible Design</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Customizable components built with Tailwind CSS.</p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transition-all duration-200 hover:shadow-xl">
              <div className="h-12 w-12 rounded-md bg-indigo-500 text-white flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Secure by Default</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Enterprise-grade security with Payload CMS.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage 