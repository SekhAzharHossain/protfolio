'use client'
import { motion } from "framer-motion";
import { Mail, MessageSquare,X} from "lucide-react";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Swal from 'sweetalert2'
import React,{useEffect,useState} from "react";
import Link from "next/link";

const Contact = () => {

  const [isClient, setIsClient]=useState(false);
  useEffect(()=>{
    setIsClient(true);
  },[])

  if(!isClient) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target; // Get the form element
    const formData = new FormData(form);
  
    formData.append("access_key", "6b71081a-8c60-4b64-babe-a753f282d8fd");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      Swal.fire({
        title: "Your message has been successfully sent.",
        text: "I appreciate your interest and will respond as soon as possible.",
        icon: "success"
      });
      form.reset();
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-muted-foreground">azharhossain6520@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <Link href={'https://www.linkedin.com/in/sekhazharhossain/'} className="text-muted-foreground">Sekh Azhar Hossain</Link>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-muted-foreground">Available for freelance work</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl shadow-lg p-6">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <Input placeholder="Your Name" name="name"/>
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" name="email"/>
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[120px]" name="message"/>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact