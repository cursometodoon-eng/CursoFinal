"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AttentionSection() {
  return (
    <section className="relative py-3 md:py-6 bg-concurso overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
          {/* Text Content - Left side on desktop */}
          <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left flex-2 lg:flex-1 py-12 lg:py-0 lg:pr-8">
            {/* Headline */}
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                <span className="text-[#d4c5a0] pr-3">SEJA </span>
                <span className="text-foreground">POLICIAL</span>
                <br />
                <span className="text-foreground pr-3">MILITAR </span>
                <span className="text-primary">EM 2026</span>
              </h2>
            </ScrollReveal>

            {/* Divider */}
            <ScrollReveal direction="left" delay={100}>
              <div className="w-16 h-1 bg-primary mb-6 mx-auto lg:mx-0" />
            </ScrollReveal>

            {/* Subtext */}
            <ScrollReveal direction="left" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                A sua preparação começa com o{" "}
                <span className="text-primary font-bold">MÉTODO!</span>
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="left" delay={300}>
              <div className="space-y-4 mb-8">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Acesse nossa plataforma:
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="border border-primary/50 text-foreground px-4 py-2 rounded-full text-sm">
                    cursometodo.ensinoagil.com.br
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Button */}
            <ScrollReveal direction="left" delay={400}>
              <Button
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground font-bold px-8 rounded-full"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                Garanta sua vaga agora
              </Button>
            </ScrollReveal>
          </div>

          {/* Image - Right side on desktop, background on mobile */}
          <div className="absolute inset-0 lg:relative lg:w-1/2 lg:shrink-0 order-first flex-1 lg:order-last">
            <div className="relative h-full w-full lg:aspect-3/4 lg:max-w-md lg:mx-auto">
              {/* Image with gradient fade on all edges */}
              <div className="absolute inset-0 lg:relative lg:h-full">
                <Image
                  src="/images/policial-sec3-B.png"
                  alt="Policial Militar em formação"
                  fill
                  className="object-center object-contain"
                />
                {/* Gradient overlays to blend image edges into bg-concurso */}
                <div className="absolute inset-0 bg-linear-to-t from-concurso via-concurso/40 to-concurso/20 lg:from-concurso lg:via-transparent lg:to-concurso/10" />
                <div className="absolute inset-0 bg-linear-to-b from-concurso/30 via-transparent to-transparent lg:from-concurso/30 lg:via-transparent lg:to-transparent" />
                <div className="absolute inset-0 bg-linear-to-l from-concurso/30 via-transparent to-concurso/80 lg:from-transparent lg:via-transparent lg:to-concurso" />
                <div className="absolute inset-0 bg-linear-to-r from-concurso/30 via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
