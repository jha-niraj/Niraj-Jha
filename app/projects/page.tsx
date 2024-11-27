"use client"

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ChevronRight, Github, ExternalLink, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import paytmImage from "./assets/Screenshot from 2024-11-27 22-45-44.png";
import vicharImage from "./assets/Screenshot from 2024-11-27 23-40-16.png";
import todoImage from "./assets/Screenshot from 2024-11-27 23-40-25.png";
import logisticsImage from "./assets/Screenshot from 2024-11-27 23-40-36.png";

const projects = [
    {
        id: 1,
        title: "Paytm Clone",
        description: "A fintech application where users can send or receive and perform transactions on dummy accounts. Features real-time updates and secure payment processing.",
        image: {paytmImage},
        technologies: ["React", "Node.js", "Express JS", "MongoDB"],
        github: "https://github.com/jha-niraj/Paytm-Clone",
        demo: "https://paytm-client.vercel.app/",
    },
    {
        id: 2,
        title: "Vichar Space",
        description: "A modern blogging website where you can blog about anything and see what community thinks about it.",
        image: {vicharImage},
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Hono", "Cloudflare", "Postgres SQL"],
        github: "https://github.com/jha-niraj/Vichar-Space",
        demo: "https://vichar-space.vercel.app/",
    },
    {
        id: 3,
        title: "Todo App",
        description: "A simple todo app built with React. It allows users to create, edit, and delete tasks with a clean and intuitive interface.",
        image: {todoImage},
        technologies: ["React", "TypeScript", "TailwindCSS", "Express JS", "Node JS", "Postgres SQL"],
        github: "https://github.com/jha-niraj/Todo-App",
        demo: "https://todo-app-coral-nu-21.vercel.app/",
    },
    {
        id: 3,
        title: "Logistics Center",
        description: "A client project where I need to built an Logistics Center website with the Authentication and some G-Mail service wrapper.",
        image: {logisticsImage},
        technologies: ["React", "TypeScript", "TailwindCSS", "Express JS", "Node JS", "Mongo DB"],
        github: "https://github.com/jha-niraj/logistics-website",
        demo: "https://logistics-website-atju.onrender.com/",
    }
]

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
    technologies: string[];
    github: string;
    demo: string;
}

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <nav className="p-4 flex items-center text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">
                    Home
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>Projects</span>
            </nav>

            <div className="container max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold">Projects</h1>

                <div className="grid gap-6 md:grid-cols-2">
                    {
                        projects.map((project: any, index: any) => (
                            <CardContainer key={project.id} className="inter-var">
                                <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-[500px] w-full rounded-xl p-6 border">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <div className="flex items-start justify-between mb-4">
                                                <CardItem
                                                    translateZ="50"
                                                    className="text-2xl font-bold text-foreground"
                                                >
                                                    {project.title}
                                                </CardItem>
                                                <CardItem
                                                    translateZ="50"
                                                    as="div"
                                                    className="flex items-center gap-2"
                                                >
                                                    <Star className="h-4 w-4 text-yellow-500" />
                                                    <span className="text-sm text-muted-foreground">{project.stars} stars</span>
                                                </CardItem>
                                            </div>
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="text-muted-foreground text-sm mt-2 mb-4"
                                            >
                                                {project.description}
                                            </CardItem>
                                            <CardItem
                                                translateZ="100"
                                                className="w-full mt-4"
                                            >
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={400}
                                                    height={200}
                                                    className="rounded-lg object-cover w-full h-[200px]"
                                                />
                                            </CardItem>
                                            <CardItem
                                                translateZ="60"
                                                as="div"
                                                className="flex flex-wrap gap-2 mt-4"
                                            >
                                                {
                                                    project.technologies.map((tech) => (
                                                        <Badge key={tech} variant="secondary" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20">
                                                            {tech}
                                                        </Badge>
                                                    ))
                                                }
                                            </CardItem>
                                        </div>
                                        <CardItem
                                            translateZ="60"
                                            as="div"
                                            className="flex gap-3 w-full justify-between mt-4"
                                        >
                                            {
                                                project.github && (
                                                    <Button variant="outline" className="flex-1" asChild>
                                                        <Link href={project.github} target="_blank">
                                                            <Github className="mr-2 h-4 w-4" />
                                                            View Source
                                                        </Link>
                                                    </Button>
                                                )
                                            }
                                            {
                                                project.demo && (
                                                    <Button variant="default" className="flex-1" asChild>
                                                        <Link href={project.demo} target="_blank">
                                                            <ExternalLink className="mr-2 h-4 w-4" />
                                                            Live Demo
                                                        </Link>
                                                    </Button>
                                                )
                                            }
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))
                    }
                    <CardContainer className="inter-var">
                        <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-[500px] w-full rounded-xl p-6 border overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-background to-background" />
                            <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4">
                                <CardItem translateZ="50" className="text-3xl font-bold tracking-wider">
                                    COMING SOON
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-muted-foreground max-w-sm"
                                >
                                    More exciting projects in development. Stay tuned!
                                </CardItem>
                                <CardItem translateZ="70">
                                    <Badge variant="outline" className="text-purple-400 border-purple-400">
                                        In Development
                                    </Badge>
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </main>
    )
}

