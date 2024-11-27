import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Code2, ChevronRight, IconNode } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <nav className="p-4 flex items-center text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">
                    Home
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>About</span>
            </nav>

            <div className="container px-4 py-8 space-y-12">
                <Card className="border-purple-500/20">
                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="relative">
                            <div className="w-48 h-48 rounded-full overflow-hidden ring-2 ring-purple-500 ring-offset-4 ring-offset-background">
                                <Image
                                    src="/placeholder.svg"
                                    alt="Profile"
                                    width={192}
                                    height={192}
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl -z-10" />
                        </div>

                        <div className="flex-1 space-y-4 text-center md:text-left">
                            <h1 className="text-2xl font-bold">About me</h1>
                            <p className="text-muted-foreground max-w-2xl">
                                I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems.
                                With expertise in modern web technologies, I focus on building scalable and user-friendly applications.
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                                or sharing knowledge with the developer community.
                            </p>

                            <div className="flex gap-3 justify-center md:justify-start">
                                <Link
                                    href="https://github.com"
                                    className="p-2 rounded-full hover:bg-muted transition-colors"
                                    target="_blank"
                                >
                                    <Github className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="https://twitter.com"
                                    className="p-2 rounded-full hover:bg-muted transition-colors"
                                    target="_blank"
                                >
                                    <Twitter className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="https://linkedin.com"
                                    className="p-2 rounded-full hover:bg-muted transition-colors"
                                    target="_blank"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="https://leetcode.com"
                                    className="p-2 rounded-full hover:bg-muted transition-colors"
                                    target="_blank"
                                >
                                    <Code2 className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <section className="space-y-8">
                    <h2 className="text-2xl font-bold">My Tech Stack</h2>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-400">Frontend</h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {
                                frontendTechnologies.map((tech) => (
                                    <TechCard key={tech.name} {...tech} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-400">Backend</h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {
                                backendTechnologies.map((tech) => (
                                    <TechCard key={tech.name} {...tech} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-400">Others</h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {
                                otherTechnologies.map((tech) => (
                                    <TechCard key={tech.name} {...tech} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

function TechCard({ name, description, icon: Icon }: {
    name: string
    description: string
    icon: string
}) {
    return (
        <Card className="group hover:border-purple-500/50 transition-colors">
            <CardContent className="p-4 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Image
                        src={icon}
                        alt={name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                </div>
                <div className="space-y-1">
                    <h4 className="font-medium">{name}</h4>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}

const frontendTechnologies = [
    {
        name: "React",
        description: "A JavaScript library for building user interfaces with reusable components",
        icon: "/placeholder.svg"
    },
    {
        name: "Next.js",
        description: "The React framework for production with server-side rendering and static generation",
        icon: "/placeholder.svg"
    },
    {
        name: "TypeScript",
        description: "A typed superset of JavaScript that compiles to plain JavaScript",
        icon: "/placeholder.svg"
    },
]

const backendTechnologies = [
    {
        name: "Node.js",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
        icon: "/placeholder.svg"
    },
    {
        name: "Python",
        description: "A versatile programming language known for its simplicity and extensive libraries",
        icon: "/placeholder.svg"
    },
    {
        name: "Java",
        description: "A class-based, object-oriented programming language designed for portability",
        icon: "/placeholder.svg"
    },
]

const otherTechnologies = [
    {
        name: "Git",
        description: "A distributed version control system for tracking changes in source code",
        icon: "/placeholder.svg"
    },
    {
        name: "Docker",
        description: "A platform for developing, shipping, and running applications in containers",
        icon: "/placeholder.svg"
    },
    {
        name: "AWS",
        description: "A comprehensive cloud computing platform with various services",
        icon: "/placeholder.svg"
    },
]

