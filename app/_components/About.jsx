'use client'
import { motion } from "framer-motion";
import { Code, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-8">
            <User className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg p-6 md:p-8">
            <p className="text-card-foreground leading-relaxed mb-6">
              I'm a passionate Frontend Developer with expertise in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-semibold text-foreground">What I Do</h3>
            </div>
            
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-accent">
                <h4 className="font-medium text-foreground mb-2">Web Development</h4>
                <p className="text-muted-foreground">Building responsive websites with modern technologies</p>
              </div>
              <div className="p-4 rounded-lg bg-accent">
                <h4 className="font-medium text-foreground mb-2">UI/UX Design</h4>
                <p className="text-muted-foreground">Creating intuitive and beautiful user interfaces</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About