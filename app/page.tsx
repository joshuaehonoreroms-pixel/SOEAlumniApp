import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PublicNav } from "@/components/public-nav"
import { ArrowRight, Users, GraduationCap, Briefcase, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PublicNav />
      <main className="flex-1">
        {/* Hero Section - Inspired by Vercel/Next.js clean dark aesthetic */}
        <section className="relative overflow-hidden border-b border-border bg-slate-950 py-24 text-white lg:py-32">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="mx-auto max-w-4xl space-y-8">
              <h1 className="text-balance text-5xl font-extrabold tracking-tight sm:text-7xl">
                Connecting{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Software Engineering
                </span>{" "}
                Students & Alumni
              </h1>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-slate-400 sm:text-xl">
                Network • Learn • Mentor • Grow. The exclusive community platform built for the Software Engineering
                Department.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="h-12 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Link href="/signup">Join the Network</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 border-slate-700 bg-transparent px-8 hover:bg-slate-900"
                >
                  <Link href="/alumni">Explore Alumni</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Inspired by Vercel's data-driven blocks */}
        <section className="border-b border-border bg-white py-12 dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1,200+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">450+</p>
                <p className="text-sm text-muted-foreground">Verified Alumni</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">85+</p>
                <p className="text-sm text-muted-foreground">Partner Companies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">200+</p>
                <p className="text-sm text-muted-foreground">Success Stories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Modern card layout */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for our Community</h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to bridge the gap between academia and industry.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Alumni Directory",
                  desc: "Connect with graduates working in top tech companies worldwide.",
                  icon: Users,
                  color: "text-blue-500",
                },
                {
                  title: "Mentorship",
                  desc: "Get guidance from experienced alumni or give back by mentoring students.",
                  icon: Globe,
                  color: "text-green-500",
                },
                {
                  title: "Opportunities",
                  desc: "Access exclusive internships, job openings, and project collaborations.",
                  icon: Briefcase,
                  color: "text-blue-500",
                },
                {
                  title: "Learning",
                  desc: "Follow curated roadmaps and access department-specific resources.",
                  icon: GraduationCap,
                  color: "text-green-500",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted group-hover:bg-accent`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="mb-2 font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Pages Preview - CTA for different user types */}
        <section className="bg-slate-50 py-24 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  For Students
                </div>
                <h3 className="text-3xl font-bold">Launch Your Career</h3>
                <p className="text-muted-foreground">
                  Connect with mentors who've been where you are. Get insider tips on interviews, internships, and what
                  skills are actually in demand.
                </p>
                <ul className="space-y-3">
                  {[
                    "Access exclusive internship listings",
                    "Participate in mock interviews",
                    "View specialized learning roadmaps",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                  For Alumni
                </div>
                <h3 className="text-3xl font-bold">Give Back & Expand</h3>
                <p className="text-muted-foreground">
                  Reconnect with your peers, mentor the next generation of engineers, and find senior talent for your
                  teams.
                </p>
                <ul className="space-y-3">
                  {[
                    "Recruit top talent from your alma mater",
                    "Network with fellow professional alumni",
                    "Share your industry expertise",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-white">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <span className="text-xs font-bold text-white">PS</span>
              </div>
              <span className="font-bold tracking-tight">PROJECT SEAL</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Software Engineering Department. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
