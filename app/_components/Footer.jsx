'use client'
import { Heart } from "lucide-react";

 const Footer = () => {
  return (
    <footer className="py-8 border-t dark:border-gray-800 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
          <span>© 2025 Built with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>by Sekh Azhar Hossain</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer