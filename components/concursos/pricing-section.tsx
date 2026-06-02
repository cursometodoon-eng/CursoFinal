"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  "Aulas ao vivo com professores especializados",
  "Simulados próprios para todos os concursos",
  "Material exclusivo e atualizado",
  "Acesso à plataforma Método completa",
  "Monitorias coletivas e individuais",
  "Acompanhamento em todas as disciplinas",
]

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-concurso" id="pricing">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Invista na sua Aprovação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para seus objetivos e comece agora mesmo.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Card */}
        <ScrollReveal direction="up" delay={200}>
          <div className="max-w-lg mx-auto">
            <div className="relative bg-card rounded-3xl border-2 border-primary/50 overflow-hidden shadow-2xl shadow-primary/10">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Turma Concursos
                </span>
              </div>

              {/* Card Header */}
              <div className="p-8 pb-6 bg-linear-to-b from-primary/10 to-transparent">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-primary/20 border border-primary/30">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Combo Método</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  PMMA • CBMMA • Polícia Penal
                </p>
              </div>

              {/* Pricing Options */}
              <div className="p-8 pt-4 space-y-4">
                {/* Monthly Option */}
                <div className="rounded-xl border border-border bg-card/50 p-5 hover:border-primary/50 transition-colors relative overflow-hidden">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                      Plano Mensal
                    </span>
                    <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                      Promoção 30 dias
                    </span>
                  </div>

                  <div className="flex flex-col mb-4">
                    <span className="text-xs text-muted-foreground/60 line-through">De R$ 99,90/mês</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-sm text-orange-500 font-bold">Por R$</span>
                      <span className="text-4xl font-extrabold text-orange-500">69,90</span>
                      <span className="text-sm text-muted-foreground">/mês</span>
                    </div>
                  </div>

                  <a
                    href="https://cursometodo.ensinoagilpay.com/turma-concursos-promo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full font-bold rounded-lg border-2 border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                    >
                      Assinar Mensal
                    </Button>
                  </a>
                </div>

                {/* 6 Months Option - Highlighted */}
                <div className="rounded-xl border-2 border-primary bg-primary/5 p-5 relative">
                  <div className="absolute -top-3 left-4 flex gap-2">
                    <span className="text-[10px] font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full uppercase">
                      Melhor oferta
                    </span>
                    <span className="text-[10px] font-bold text-white bg-orange-500 px-3 py-1 rounded-full uppercase">
                      Promoção 30 dias
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-2 mt-2">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      Pacote Semestral
                    </span>
                    <span className="text-[10px] font-bold text-green-400 bg-green-400/20 px-2 py-0.5 rounded-full border border-green-400/30">
                      ECONOMIA DE 27%
                    </span>
                  </div>

                  <div className="flex flex-col mb-1">
                    <span className="text-xs text-muted-foreground/60 line-through">De R$ 550,00</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-sm text-foreground font-bold">Por R$</span>
                      <span className="text-4xl font-extrabold text-foreground">400,00</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    Parcele em até 6x no cartão
                  </p>

                  <a
                    href="https://cursometodo.ensinoagilpay.com/turma-concursos-promo-6-meses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      className="w-full font-bold rounded-lg bg-primary hover:bg-accent text-primary-foreground shadow-lg transition-all"
                    >
                      Assinar Semestral <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>

                {/* Features List */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-4">
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={300}>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Dúvidas? Entre em contato com o suporte.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
