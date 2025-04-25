/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Développeur web full stack";

  // Typing effect
  useEffect(() => {
    if (isTyping && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isTyping && text.length === fullText.length) {
      setIsTyping(false);
    }
  }, [text, isTyping]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 py-24 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bonjour, je suis Farrel
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-primary">
              <span
                className={cn(
                  text.length === fullText.length
                    ? ""
                    : "after:content-['|'] after:animate-blink after:ml-1"
                )}
              >
                {text}
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Je conçois des expériences numériques exceptionnelles avec des
              technologies web modernes. Spécialisé dans la création
              d'applications remarquables et performantes qui répondent à des
              problèmes concrets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild>
                <a href="#projects">Voir mon travail</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contactez moi</a>
              </Button>
            </div>

            {/* <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Code className="w-6 h-6" />
                <span className="sr-only">Portfolio</span>
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDownCircle className="w-10 h-10 text-primary" />
        </Link>
      </div>
    </section>
  );
}
