"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  // githubUrl: string;
  liveUrl: string;
  category: "web" | "mobile" | "design";
  fullDescription: string;
  features: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Epignosis",
    description: "Une plateforme de gestions des établissements catholiques",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "MySql"],
    image: "/projects/epignosis-classes.png",
    // githubUrl: "https://github.com",
    liveUrl: "https://epignosis.vercel.app",
    category: "web",
    fullDescription:
      "Une plateforme permettant aux établissements catholiques de gérer leurs flux financiers et comptables",
    features: [
      "Authentification et gestion des profils utilisateurs",
      "Inscription des élèves",
      "Enregistrement des paiements des élèves",
      "Enregistrement des revenus hors frais d'inscription",
      "Exécution des dépenses des établissements",
      "Dahboard admin et monitoring",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Daysi UI",
      "Prisma",
      "MySql",
    ],
  },
  {
    id: 2,
    title: "Alogis",
    description:
      "Un site présentant alogis Gabon et les services fournis par l'entreprise",
    tags: ["React", "Bootstrap", "TypeScript", "React DnD"],
    image: "/projects/alogis-about.png",
    // githubUrl: "https://github.com",
    liveUrl: "https://alogisgabon.com",
    category: "web",
    fullDescription:
      "Un site présentant alogis Gabon et les services fournis par l'entreprise",
    features: ["Présentation de Alogis Gabon", "Services Alogis GAbon"],
    technologies: ["React", "Bootstrap", "TypeScript"],
  },
  {
    id: 3,
    title: "DigiWave",
    description: "Site de l'agence marketing DigiWave",
    tags: ["Next JS", "Tailwindcss", "TypeScript"],
    image: "/projects/digiwave.png",
    // githubUrl: "https://github.com",
    liveUrl: "https://digiwave-pi.vercel.app/",
    category: "web",
    fullDescription: "Site de l'agence marketing DigiWave",
    features: [],
    technologies: ["Next JS", "TypeScript", "Tailwindcss"],
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une vue de quelques projets réalisés. Cliquez sur un projet pour en
            savoir plus
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="min-w-24"
            >
              Tout
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className="min-w-24"
            >
              Web
            </Button>
            <Button
              variant={filter === "mobile" ? "default" : "outline"}
              onClick={() => setFilter("mobile")}
              className="min-w-24"
            >
              Mobile
            </Button>
            <Button
              variant={filter === "design" ? "default" : "outline"}
              onClick={() => setFilter("design")}
              className="min-w-24"
            >
              Design
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="h-full flex flex-col overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {/* <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Github
                      </a>
                    </Button> */}
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="relative h-64 md:h-80 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Overview</h4>
                <p className="text-muted-foreground">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Fonctionnalités clés
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                {/* <Button variant="outline" asChild>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button> */}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
