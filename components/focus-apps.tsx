"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Menu, X, Download, Smartphone, Star } from 'lucide-react'

// 添加 Google Analytics 跟踪代码
const GA_TRACKING_ID = 'G-8P2HNG6JG9' // 替换为您的 Google Analytics 跟踪 ID

// 添加 pageview 函数
const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export function FocusApps() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('bg-white/80', 'backdrop-blur-md')
          header.classList.remove('bg-transparent')
        } else {
          header.classList.remove('bg-white/80', 'backdrop-blur-md')
          header.classList.add('bg-transparent')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // 添加 Google Analytics 页面浏览跟踪
    pageview(window.location.pathname)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="fixed w-full z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Focus Logo" width={40} height={40} />
            <span className="text-xl font-bold text-gray-800">Focus</span>
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 font-medium">Home</a></li>
              <li><a href="#apps" onClick={() => scrollToSection('apps')} className="text-gray-600 hover:text-gray-900 font-medium">Apps</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 font-medium">About</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 font-medium">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <ul className="flex flex-col items-center py-4">
              <li><a href="#home" onClick={() => scrollToSection('home')} className="block py-2 text-gray-600 hover:text-gray-900 font-medium">Home</a></li>
              <li><a href="#apps" onClick={() => scrollToSection('apps')} className="block py-2 text-gray-600 hover:text-gray-900 font-medium">Apps</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')} className="block py-2 text-gray-600 hover:text-gray-900 font-medium">About</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className="block py-2 text-gray-600 hover:text-gray-900 font-medium">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        <section id="home" className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Enhance Your Digital Experience</h1>
            <p className="text-xl text-gray-600 mb-8">Discover our suite of beautifully designed and highly functional apps that will transform the way you interact with social media and content.</p>
            <a href="#apps" onClick={(e) => { e.preventDefault(); scrollToSection('apps'); }} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
              Explore Our Apps
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <StatisticsSection />

        <section id="apps" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Apps</h2>
            <AppSection
              title="FocusTwitter X"
              description="Experience Twitter like never before with FocusTwitter X. Say goodbye to ads, distractions, and unwanted content. Enjoy a clean, customizable interface that puts you in control of your Twitter experience."
              image="/images/focustwitterx.png"
              googlePlayLink="https://play.google.com/store/apps/details?id=allen.town.focus.twitter.x"
              appStoreLink="https://apps.apple.com/us/app/focusx-for-twitter/id6450184089"
            />
            
            <AppSection
              title="FocusTwitter"
              description="Rediscover the joy of Twitter with FocusTwitter. Our app provides a distraction-free environment, allowing you to concentrate on the content that matters most to you."
              image="/images/focustwitter.png"
              googlePlayLink="https://play.google.com/store/apps/details?id=allen.town.focus.twitter"
            />
            
            <AppSection
              title="FocusReader"
              description="FocusReader is the ultimate RSS reader for Android. With support for local storage and seamless integration with major aggregator services, it offers the best reading experience for your favorite content."
              image="/images/focusreader.png"
              googlePlayLink="https://play.google.com/store/apps/details?id=allen.town.focus.reader"
              forChinaLink="https://www.pgyer.com/focusreader"
            />
            
            <AppSection
              title="FocusReddit"
              description="Elevate your Reddit browsing with FocusReddit. Our app combines Material Design with powerful features to deliver an intuitive and enjoyable Reddit experience, no matter where you are."
              image="/images/focusreddit.png"
              googlePlayLink="https://play.google.com/store/apps/details?id=allen.town.focus.red"
              appStoreLink="https://apps.apple.com/us/app/focus-for-reddit/id6453024842"
            />
            
            <AppSection
              title="AIChatOne"
              description="ALL-In-One AI ChatGPT Copilot & Youtube Web Summary & Twitter writer & chathub & chatbot"
              image="/images/aichatone.png"
              directDownloadLink="https://aichatone.com"
            />
            
            <AppSection
              title="Focus for Mastodon"
              description="Join the decentralized social network revolution with Focus for Mastodon. Our app offers a unique and beautiful interface, packed with features to help you discover news, trends, and express your thoughts effortlessly."
              image="/images/focusmastodon.png"
              googlePlayLink="https://play.google.com/store/apps/details?id=allen.town.focus.mastodon"
            />
            
            <AppSection
              title="FocusPodcast"
              description="Dive into the world of podcasts with FocusPodcast. Our top-quality podcast management and playback application gives you access to over two million podcasts and 95 million episodes, all in one beautifully designed app."
              image="/images/focuspodcast.png"
              googlePlayLink="https://play.google.com/store/apps/details?id=allen.town.focus.podcast"
              forChinaLink="https://www.pgyer.com/focuspodcast"
            />
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Focus</h2>
            <p className="text-xl text-gray-600 mb-8">At Focus, we&apos;re passionate about creating beautiful, functional apps that enhance your digital life. Our team of dedicated developers and designers work tirelessly to bring you the best possible user experience across all our applications.</p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              Learn More About Us
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">Have questions or feedback? We&apos;d love to hear from you! Reach out to our team and let us know how we can help improve your experience with our apps.</p>
            <a href="mailto:products.focus@gmail.com" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
              Contact Us
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Focus</h3>
              <p className="text-gray-400">Focus creates beautiful and functional apps to enhance your digital experience.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" target='blank' className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" target='blank' className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="mailto:products.focus@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/allentown521" target='blank' className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://github.com/allentown521" target='blank' className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Focus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StatisticsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <Download className="mx-auto h-12 w-12 text-blue-600" />
            <div className="text-4xl font-bold text-gray-800">1M+</div>
            <div className="text-xl text-gray-600">Downloads</div>
          </div>
          <div className="space-y-2">
            <Smartphone className="mx-auto h-12 w-12 text-blue-600" />
            <div className="text-4xl font-bold text-gray-800">7</div>
            <div className="text-xl text-gray-600">Apps</div>
          </div>
          <div className="space-y-2">
            <Star className="mx-auto h-12 w-12 text-blue-600" />
            <div className="text-4xl font-bold text-gray-800">4.6</div>
            <div className="text-xl text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AppSection({ title, description, image, googlePlayLink, appStoreLink, forChinaLink, directDownloadLink }: {
  title: string
  description: string
  image: string
  googlePlayLink?: string
  appStoreLink?: string
  forChinaLink?: string
  directDownloadLink?: string
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="flex-1">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={500}
          height={300}
          className="rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <div className="flex flex-wrap gap-4">
          {googlePlayLink && (
            <a href={googlePlayLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={160}
                height={60}
              />
            </a>
          )}
          {appStoreLink && (
            <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                width={140}
                height={46}
              />
            </a>
          )}
          {forChinaLink && (
            <a href={forChinaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              For China
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          )}
          {directDownloadLink && (
            <a href={directDownloadLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              Try it for free!
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}