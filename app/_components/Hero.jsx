'use client'
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientText from "./GradientText";
import Orb from "./Orb";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-traansparent">
      
      {/* Orb Background */}
      <div className="absolute inset-0 -z-10" style={{width:"100%",height:"100%"}}>
        <Orb
          hoverIntensity={6}
          rotateOnHover={true}
          hue={360}
          forceHoverState={true}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0. }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Sekh Azhar Hossain</span>
          </h1>
          <div className="text-xl md:text-2xl font-bold text-muted-foreground mb-8">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              Frontend Developer crafting beautiful web experiences
            </GradientText>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
