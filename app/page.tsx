import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play, Heart, MessageSquare, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import TestimonialCard from "@/components/testimonial-card"
import VideoPlayer from "@/components/video-player"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded" />
            <span className="text-xl font-bold">Ministry Name</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#watch"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Watch
            </Link>
            <Link
              href="#prayer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Prayer Requests
            </Link>
            <Link
              href="#donate"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Donate
            </Link>
          </nav>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Hero background"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 text-center text-white">
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              One Voice. One Mission. Eternal Impact.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              Join us as we spread the message of hope and transformation across the world.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                Join the Movement
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary" className="gap-2">
                Watch Live
                <Play className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-background/20 hover:bg-background/30">
                Submit a Prayer
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About the Pastor */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=600&width=600" alt="Pastor" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">About the Pastor</h2>
                <p className="text-lg text-muted-foreground">
                  With over 20 years of ministry experience, Pastor [Name] has dedicated his life to spreading the
                  message of hope and transformation. His vision is to reach the unreached and empower believers to live
                  out their purpose.
                </p>
                <p className="text-lg text-muted-foreground">
                  "My calling came at a young age when I experienced God's transformative power in my own life. Since
                  then, I've committed to helping others discover the same life-changing relationship with Christ."
                </p>
                <Button className="gap-2">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Word */}
        <section id="watch" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Weekly Word</h2>
              <p className="mt-4 text-lg text-muted-foreground">Get inspired with our latest messages and teachings</p>
            </div>
            <div className="mx-auto max-w-4xl">
              <VideoPlayer />
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="gap-2">
                  <Play className="h-4 w-4" />
                  Watch More Sermons
                </Button>
                <Button variant="outline" className="gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M8 5.2A5.38 5.38 0 0 1 12 4c2.5 0 4.13.8 5.5 3.5C19 10 21 10 21 12v3c0 1.5-3 2.5-5 2.5-2.5 0-2.5-2.5-4-2.5-1 0-1 .5-2 .5s-1-.5-2-.5c-1 0-1.5 1-2.5 1-1.5 0-3-1-3.5-2" />
                    <path d="M5 19.5C3.5 19.5 2 19 2 17.5V15c0-1 1-2 3-2" />
                    <path d="M12 12a2 2 0 0 0 0-4 2 2 0 0 0 0 4Z" />
                  </svg>
                  Listen to Podcast
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Request Form */}
        <section id="prayer" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Submit a Prayer Request</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our prayer team is committed to standing with you in faith
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-xl">
              <Card>
                <form className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="prayer-request" className="text-sm font-medium">
                      Prayer Request
                    </label>
                    <Textarea id="prayer-request" placeholder="Share your prayer request here..." rows={5} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="confidential"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="confidential" className="text-sm text-muted-foreground">
                      Keep my request confidential
                    </label>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Prayer Request
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonies Wall */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Testimonies</h2>
              <p className="mt-4 text-lg text-muted-foreground">Lives changed through the power of faith</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Sarah Johnson"
                location="Chicago, IL"
                testimony="After struggling with anxiety for years, I found peace through the ministry's teachings. The weekly prayers have transformed my life."
              />
              <TestimonialCard
                name="Michael Rodriguez"
                location="Phoenix, AZ"
                testimony="My marriage was on the brink of divorce when we attended the couples retreat. Today, we're stronger than ever and leading a small group together."
              />
              <TestimonialCard
                name="Rebecca Chen"
                location="Seattle, WA"
                testimony="The online services became my lifeline during a difficult health journey. The community's prayers supported me through my complete recovery."
              />
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Share Your Testimony
              </Button>
            </div>
          </div>
        </section>

        {/* Partner with Us */}
        <section id="donate" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Partner with Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Your generosity helps us reach more people with the message of hope
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="flex flex-col">
                <div className="p-6">
                  <h3 className="text-xl font-bold">One-Time Gift</h3>
                  <p className="mt-2 text-muted-foreground">
                    Support our ministry with a one-time donation of any amount
                  </p>
                  <Button className="mt-6 w-full gap-2">
                    <DollarSign className="h-4 w-4" />
                    Give Now
                  </Button>
                </div>
              </Card>
              <Card className="flex flex-col border-primary">
                <div className="p-6">
                  <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold">Monthly Partner</h3>
                  <p className="mt-2 text-muted-foreground">
                    Join our monthly giving program and receive exclusive partner benefits
                  </p>
                  <Button className="mt-6 w-full gap-2">
                    <DollarSign className="h-4 w-4" />
                    Become a Partner
                  </Button>
                </div>
              </Card>
              <Card className="flex flex-col">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Legacy Giving</h3>
                  <p className="mt-2 text-muted-foreground">
                    Make a lasting impact through planned giving and estate donations
                  </p>
                  <Button variant="outline" className="mt-6 w-full gap-2">
                    <DollarSign className="h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold">Ministry Name</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Spreading hope and transformation across the world since 2005.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#watch" className="text-sm text-muted-foreground hover:text-foreground">
                    Watch
                  </Link>
                </li>
                <li>
                  <Link href="#prayer" className="text-sm text-muted-foreground hover:text-foreground">
                    Prayer Requests
                  </Link>
                </li>
                <li>
                  <Link href="#donate" className="text-sm text-muted-foreground hover:text-foreground">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Subscribe</h3>
              <p className="mt-4 text-sm text-muted-foreground">Stay updated with our latest messages and events.</p>
              <form className="mt-4 flex gap-2">
                <Input placeholder="Email address" className="max-w-lg flex-1" />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ministry Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
