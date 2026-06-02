"use client"

import { Target, Monitor, ShieldCheck, Users, BookOpen, ClipboardCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const benefits = [
  {
    icon: Target,
    title: "Aulas ao Vivo",
  },
  {
    icon: Monitor,
    title: "Acesso à Plataforma Método",
  },
  {
    icon: ShieldCheck,
    title: "Simulados Próprios",
  },
  {
    icon: Users,
    title: "Monitorias Coletivas e Individuais",
  },
  {
    icon: BookOpen,
    title: "Material Exclusivo",
  },
  {
    icon: ClipboardCheck,
    title: "Acompanhamento em Todas as Disciplinas",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-concurso">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            O que você vai receber
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} direction="up" delay={100 + index * 80}>
              <div
                className="flex items-center gap-4 p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 transition-colors"
              >
                <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-lg border-2 border-primary bg-transparent">
                  <benefit.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-foreground font-semibold uppercase tracking-wide text-sm">
                  {benefit.title}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
