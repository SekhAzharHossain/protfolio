'use client'
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A productive task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Firebase", "Tailwind"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A beautiful portfolio website built with modern technologies",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#"
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
                className="bg-card rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
                  <Button variant="outline" className="w-full">
                    <Link className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects