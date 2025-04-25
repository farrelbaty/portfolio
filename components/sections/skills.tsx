/* eslint-disable react/no-unescaped-entities */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Zustand", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "Shadcn UI", level: 95 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 85 },
      { name: "Django", level: 90 },
      { name: "REST API", level: 95 },
      { name: "Flask", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySql", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Prisma", level: 90 },
    ],
  },
  {
    id: "tools",
    name: "Autres outils",
    skills: [
      { name: "Git", level: 90 },
      { name: "CI/CD et github actions", level: 80 },
      { name: "Jest", level: 85 },
      { name: "React testing library", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes compétences
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voici les technologies et outils que j'utilise au quotidien pour
            donner vie aux idées
          </p>
        </motion.div>

        <Tabs
          defaultValue="frontend"
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial="hidden"
                    animate={activeTab === category.id ? "visible" : "hidden"}
                    custom={index}
                    variants={fadeInVariant}
                    className="flex gap-3 items-center"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${
                              activeTab === category.id ? skill.level : 0
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
