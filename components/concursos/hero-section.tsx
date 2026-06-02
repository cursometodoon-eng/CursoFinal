"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-concurso overflow-hidden">
      {/* Police officers image - full-width background behind content */}
      <div className="absolute inset-x-0 bottom-0 w-full min-h-125 h-[70%] md:h-[80%]">
        <Image
          src="/images/oficiais-sec1.png"
          alt="Policiais - PMMA, CBMMA e Polícia Penal"
          fill
          className="object-cover lg:object-contain object-bottom "
          priority
        />
        {/* Gradient overlays to blend image edges into bg-concurso */}
        <div className="absolute inset-0 bg-linear-to-t from-concurso/30 via-transparent to-concurso/60" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-concurso" />
        <div className="absolute inset-0 bg-linear-to-l from-transpare via-transparent sm:to-concurso/70 to-concurso/0" />
        <div className="absolute inset-0 bg-linear-to-r from-concurso via-transparent sm:to-concurso/70 to-concurso/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-12">
        {/* Logo */}
        <ScrollReveal direction="up">
          <div className="flex justify-center">
            <Image
              src="/images/logo-metodo-nfundo.png"
              alt="Método - Vestibular & Concursos"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <div className="flex items-center">
              <span className="bg-[#c4a052] text-concurso px-3 py-1 text-xl font-bold rounded">método.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Badge */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex justify-center mb-6">
            <span className="border border-muted-foreground/30 text-foreground px-6 py-2 text-sm font-medium tracking-wider uppercase">
              Turma Online
            </span>
          </div>
        </ScrollReveal>

        {/* Main Title with subtle light blur cloud behind it */}
        <ScrollReveal direction="up" delay={200}>
          <div className="relative flex justify-center mb-6">
            {/* Subtle light blur glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[120%] bg-white/10 rounded-full blur-3xl" />
            </div>
            <h1 className="relative text-center text-white text-5xl md:text-7xl lg:text-8xl font-black text-primary tracking-tight text-balance">
              COMBO <span className="text-[#ff8c00]">MÉTODO</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Subtitles */}
        <ScrollReveal direction="up" delay={300}>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            <span className="text-foreground font-semibold text-sm md:text-base">CBMMA</span>
            <span className="text-primary">•</span>
            <span className="text-foreground font-semibold text-sm md:text-base">PMMA</span>
            <span className="text-primary">•</span>
            <span className="text-foreground font-semibold text-sm md:text-base">POLÍCIA PENAL</span>
          </div>
        </ScrollReveal>

        {/* Spacer to push CTA below the background image area */}
        <div className="h-[40vh] md:h-[50vh]" />

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={400}>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground font-bold text-lg px-8 py-6 rounded-full"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Quero me matricular
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
