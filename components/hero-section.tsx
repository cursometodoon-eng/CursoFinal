'use client'

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, Trophy, LaptopMinimal, Headset, ChevronLeft, ChevronRight, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

const TOTAL_SLIDES = 2
const AUTO_PLAY_MS = 7000
const SLIDE_HEIGHT = "min-h-[900px] h-auto"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const autoPlayTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrollPricing = () => {
    const element = document.getElementById("pricing")
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % TOTAL_SLIDES)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)
  }, [currentSlide, goToSlide])

  // Auto-play
  useEffect(() => {
    autoPlayTimer.current = setTimeout(nextSlide, AUTO_PLAY_MS)
    return () => {
      if (autoPlayTimer.current) clearTimeout(autoPlayTimer.current)
    }
  }, [currentSlide, nextSlide])

  // Touch / swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (diff > 60) prevSlide()
    else if (diff < -60) nextSlide()
    touchStartX.current = null
  }

  return (
    <section
      className="relative overflow-hidden bg-(--navy) text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative elements (compartilhados entre slides) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-(--orange) rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--orange-light) rounded-full blur-3xl" />
      </div>

      {/* ===== CONTAINER DO CARROSSEL (altura fixa) ===== */}
      <div className={`relative ${SLIDE_HEIGHT}`}>

        {/* ——— SLIDE 1: Turma Concursos PM / CBM / PP ——— */}
        <div
          className={`absolute inset-0 transition-all max-w-[1700px] mx-auto duration-500 ease-in-out ${currentSlide === 0
            ? 'opacity-100 translate-x-0 z-10'
            : 'opacity-0 -translate-x-20 z-0 pointer-events-none'
            }`}
        >
          <div className="flex md:hidden justify-center">
            <Image
              src="/images/logo-metodo-nfundo.png"
              alt="Método - Vestibular & Concursos"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          {/* Background: william-concurso.png (posicionado à esquerda) */}
          <div className="absolute bg-transparent inset-0 pointer-events-none">
            <Image
              src="/images/policial-sec3-B.png"

              alt="Aluno aprovado no concurso da Polícia Militar"
              fill
              className="object-contain pb-40 md:pb-0 object-bottom-left opacity-30 sm:opacity-0 md:opacity-50"
              priority
            />
            {/* Gradientes para mesclagem com o fundo */}
            <div className="absolute inset-0 bg-linear-to-t from-(--navy) via-(--navy)/0 to-(--navy)/70 min-w-screen" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--navy)" />
          </div>
          <div className="absolute bg-transparent inset-0 pointer-events-none">
            <Image
              src="/images/william-concurso.png"
              alt="Aluno aprovado no concurso da Polícia Militar"
              fill
              className="object-contain md:pl-[12%] md:pb-0 object-bottom-left opacity-40 md:opacity-80"
              priority
            />
            {/* Gradientes para mesclagem com o fundo */}
            {/* <div className="absolute inset-0 bg-linear-to-t from-(--navy) via-(--navy)/0 to-(--navy)/70 min-w-screen" /> */}
            {/* <div className="absolute inset-0 bg-linear-to-r from-(--navy)/30 via-(--navy)/60 to-(--navy)/90" /> */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-(--navy)" />
          </div>

          {/* Conteúdo do Slide 1 */}
          <div className="relative z-10 xl:pl-[25%] container mx-auto px-4 pt-5 md:pt-24 pb-40 md:pb-16 h-full flex items-center">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto w-full">
              {/* Espaço da imagem à esquerda (a imagem já está no background) */}
              <div className="hidden md:block w-80 shrink-0" />

              {/* Textos à direita */}
              <div className="flex-1 text-center md:text-left space-y-5">
                {/* Badge turma */}
                <ScrollReveal direction="up" delay={100}>
                  <div className="inline-flex items-center gap-2 bg-(--orange) text-white px-5 py-2 rounded-full text-sm md:text-base font-bold shadow-lg uppercase tracking-wide">
                    <Shield className="w-5 h-5" />
                    Nova Turma 2026
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Turma{" "}
                    <span className="text-(--orange)">Concursos</span>
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={300}>
                  <div className="space-y-1">
                    <p className="text-xl md:text-2xl font-bold text-white/90">
                      Polícia Militar
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-white/90">
                      Corpo de Bombeiros Militar
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-white/90">
                      Polícia Penal
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={400}>
                  <p className="text-base md:text-lg text-gray-300 pr-7 max-w-full leading-relaxed">
                    Preparação completa e focada para sua aprovação no concurso da PM 2026. Material atualizado com o método que funciona.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={500}>
                  <div className="pt-2">
                    <Link href="/concursos">
                      <Button
                        size="lg"
                        className="bg-(--orange) hover:bg-(--orange-light) text-white text-lg md:text-xl px-10 py-7 rounded-full font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,138,0,0.6)]"
                      >
                        Entrar para a Turma!
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>

        {/* ——— SLIDE 2: Vestibular (conteúdo original) ——— */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === 1
            ? 'opacity-100 translate-x-0 z-10'
            : 'opacity-0 translate-x-20 z-0 pointer-events-none'
            }`}
        >
          {/* Background: hero-imagem.png (centralizado atrás) */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/hero-imagem.png"
              alt="Aluna e militar fardado representando vestibular e concursos"
              fill
              className="object-cover max-w-350 m-auto object-center opacity-100"
              priority
            />
            {/* Gradientes para mesclagem com o fundo */}
            <div className="absolute inset-0 bg-linear-to-t from-(--navy) via-(--navy)/50 to-(--navy)/80" />
            <div className="absolute inset-0 bg-linear-to-r from-(--navy)/50 via-transparent to-(--navy)/50" />
          </div>

          {/* Conteúdo do Slide 2 */}
          <div className="relative z-10 container mx-auto px-4 pt-12 md:pt-20 pb-16 h-full flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <Image
                src="/images/logo-metodo-nfundo.png"
                alt="Método - Vestibular & Concursos"
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32"
              />
              <div className="flex items-center">
                <span className="bg-[#c4a052] text- px-3 py-1 text-xl font-bold rounded">método.</span>
              </div>
            </div>

            <div className="max-w-5xl mx-auto text-center space-y-6">
              {/* Badge */}
              <ScrollReveal direction="up" delay={100}>
                <div className="inline-flex items-center gap-2 bg-(--orange) text-white px-6 py-2 rounded-full md:text-lg sm: text-sm font-bold shadow-lg">
                  <Rocket className="w-5 h-5" />
                  Curso Método. Agora com turmas online
                </div>
              </ScrollReveal>

              {/* Main heading */}
              <ScrollReveal direction="up" delay={200}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance">
                  Transforme o <span className="text-(--orange) relative inline-block">sonho</span> da aprovação em{" "}
                  <span className="text-(--orange) relative inline-block">
                    REALIDADE
                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-(--orange) opacity-30 blur-sm"></span>
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <p className="text-xl md:text-2xl text-gray-300 text-pretty max-w-3xl mx-auto leading-relaxed font-medium">
                  Método comprovado com alunos aprovados no <span className="text-(--orange) font-bold">ENEM</span> e{" "}
                  <span className="text-(--orange) font-bold">UEMA</span>
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400}>
                <div className="bg-linear-to-r from-(--orange) to-(--orange-light) rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
                    <div className="flex flex-col items-center">
                      <LaptopMinimal className="w-10 h-10 mb-2" />
                      <div className="text-3xl md:text-4xl font-extrabold">100%</div>
                      <div className="text-sm font-medium">Agora Online</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Trophy className="w-10 h-10 mb-2" />
                      <div className="text-3xl md:text-4xl font-extrabold">980</div>
                      <div className="text-sm font-medium">Notas Máximas</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Headset className="w-10 h-10 mb-2" />
                      <div className="text-3xl md:text-4xl font-extrabold">100%</div>
                      <div className="text-sm font-medium">Acompanhamento Exclusivo</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA Button */}
              <ScrollReveal direction="up" delay={500}>
                <div className="pt-6">
                  <Button
                    size="lg"
                    onClick={scrollPricing}
                    className="bg-(--orange) hover:bg-(--orange-light) text-white text-lg md:text-xl px-10 py-7 rounded-full font-bold shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,138,0,0.6)]"
                  >
                    Garanta Sua Vaga
                  </Button>
                  <p className="text-sm text-gray-400 mt-3">Vagas limitadas</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Setas de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-(--orange)/80 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-(--orange)/80 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Indicadores (dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === i
                ? 'w-8 bg-(--orange)'
                : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

