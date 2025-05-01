'use client'
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientText from "./GradientText";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Sekh Azhar Hossain</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-muted-foreground mb-8">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              Frontend Developer crafting beautiful web experiences
            </GradientText>
            
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero
