"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle, Mail, Linkedin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Footer() {
  return (
    <footer className="relative z-10 bg-concurso border-t border-white/10">
      <div className="container mx-auto px-4 pt-12 pb-6">

        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            {/* Logo e Nome */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 bg-white/10 rounded-lg border border-white/20 overflow-hidden shrink-0">
                <Image
                  src="/images/logo-metodo.png"
                  alt="Logo Curso Método"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold leading-none text-white">Curso Método</h3>
                <span className="text-sm text-gray-400">Vestibular &amp; Concursos</span>
              </div>
            </div>

            {/* Contatos Sociais */}
            <div className="flex items-center gap-6">
              <Link
                href="https://instagram.com/cursometodo"
                target="_blank"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-[#eb65f7] transition-colors"
                aria-label="Instagram"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="https://wa.me/5598999999999"
                target="_blank"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="mailto:contato@cursometodo.com"
                className="group flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright & Devs Escondidos */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Curso Método. Todos os direitos reservados.</p>

            {/* Área dos Desenvolvedores "Escondida" */}
            <div className="flex items-center gap-4 mt-4 md:mt-0 opacity-20 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs">Devs:</span>
              <Link href="#" target="_blank" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" target="_blank" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  )
}
