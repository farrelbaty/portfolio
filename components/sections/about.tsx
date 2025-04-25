/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, FileText, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A propos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apprenez-en davantage sur moi, mon parcours et ce qui me motive en
            tant que développeur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUpVariant}
            className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden"
          >
            <Image
              src="/myself/myself.jpg"
              alt="Professional headshot"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInUpVariant}
            >
              <h3 className="text-2xl font-bold mb-4">Qui suis-je ?</h3>
              <p className="text-muted-foreground mb-6">
                Je suis Farrel BATY KOUIMA, développeur web et web mobile
                full-stack. Je suis passionné par les nouvelles technologies et
                leurs facultés à améliorer le quotidien de l'Homme.
              </p>
              <p className="text-muted-foreground mb-6">
                Mon parcours dans le développement web a commencé par une
                curiosité sur le fonctionnement des sites internet, qui s’est
                rapidement transformée en une passion pour leur création.
                J’apprends continuellement et j’élargis mes compétences afin de
                rester à la pointe des tendances en développement web.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeInUpVariant}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <Card>
                <CardContent className="pt-6 text-center">
                  <Briefcase className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h4 className="font-bold">Expérience</h4>
                  <p className="text-muted-foreground">3 ans</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <FileText className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h4 className="font-bold">Projets</h4>
                  <p className="text-muted-foreground">10+ achevés</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <GraduationCap className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h4 className="font-bold">Education</h4>
                  <p className="text-muted-foreground">Certification Simplon</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeInUpVariant}
              className="flex gap-4"
            >
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Télécharger CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contactez moi</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
