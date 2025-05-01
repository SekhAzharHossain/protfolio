'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link as LucideLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "NextPathAI",
    description: "NextPathAI is an AI-driven web application that empowers professionals by helping them with every step of their career journey.",
    image: "/project1.png",
    tags: ["Next.js","Gemini", "NeonDB", "Prisma","Clerk","Tailwind","Shadcn UI"],
    link: "https://next-path-ai.vercel.app/",
    completed: true,
  },
  {
    title: "Comeet",
    description: "Comeet is a powerful, modern web application built with Next.js 15, Tailwind CSS 4, React 19, and Stream Video SDK.",
    image: "/project2.png",
    tags: ["Next.js", "TypeScript", "Stream.io","Clerk","Radix UI","Tailwind"],
    link: "https://co-meet.vercel.app/",
    completed: true,
  },
  {
    title: "TalkPrepAI",
    description: "AI-powered interview preparation platform designed to help job seekers practice and improve their interview skills through realistic, interactive mock interviews.",
    image: "/project3.png",
    tags: ["Next.js","Gemini","Vapi","Shadcn UI","Clerk", "TypeScript", "Tailwind"],
    link: "https://talkprepai-8q19.vercel.app/",
    completed: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="bg-card rounded-sm shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden p-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      !project.completed ? 'group-hover:opacity-20' : ''
                    }`}
                  />
                  {!project.completed && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="text-white text-lg font-semibold bg-black/70 px-4 py-2 rounded-lg">
                        🚧 Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-card-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} className="h-4 w-4">
                    <Button variant="outline" className="w-full flex items-center gap-2 justify-center">
                     <LucideLink className="h-4 w-4" />
                      View Project
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
