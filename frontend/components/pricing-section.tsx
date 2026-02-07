'use client';

import { Button } from "@/components/ui/button"
import { Check, BookOpen, Target, Crown, Gift, ArrowRight } from "lucide-react"

const plans = [
  {
    title: "Redação UEMA + Monitoria",
    icon: Target,
    description: "Foco total no PAES e obras literárias",
    color: "border-red-500",
    bgAccent: "bg-red-50",
    textAccent: "text-red-600",
    buttonColor: "bg-red-600 hover:bg-red-700",
    priceMonthly: "89,90",
    priceAnnual: "950,00",
    // COLOQUE SEUS LINKS AQUI
    linkMonthly: "https://cursometodo.ensinoagilpay.com/curso-uema-assi",
    linkAnnual: "https://cursometodo.ensinoagilpay.com/curso-uema-unic",
    features: [
      "Correções de redação por chamada",
      "Aulas de História e Geo. do Maranhão",
      "Análise das obras literárias",
      "Cronograma de estudos individual",
      "Monitoria completa para UEMA",
    ],
  },
  {
    title: "Redação ENEM + Monitoria",
    icon: BookOpen,
    description: "Monitoria estratégica para o SISU",
    color: "border-blue-500",
    bgAccent: "bg-blue-50",
    textAccent: "text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    priceMonthly: "89,90",
    priceAnnual: "950,00",
    // COLOQUE SEUS LINKS AQUI
    linkMonthly: "https://cursometodo.ensinoagilpay.com/curso-enem-assi",
    linkAnnual: "https://cursometodo.ensinoagilpay.com/curso-enem-uinc",
    features: [
      "Correções de redação por chamada",
      "Foco nos critérios do ENEM",
      "Cronograma de estudos individual",
      "Monitoria de todas as disciplinas",
      "Simulados padrão ENEM",
    ],
  },
  {
    title: "Acesso Completo",
    icon: Crown,
    description: "Monitoria e redação ENEM + UEMA",
    color: "border-orange-500",
    bgAccent: "bg-orange-50",
    textAccent: "text-orange-600",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
    isPopular: true,
    priceMonthly: "110,00",
    priceAnnual: "1.300,00",
    // COLOQUE SEUS LINKS AQUI
    linkMonthly: "https://cursometodo.ensinoagilpay.com/curso-completo-assi",
    linkAnnual: "https://cursometodo.ensinoagilpay.com/curso-completo-unic",
    features: [
      "Correções de redação por chamada",
      "Preparação completa ENEM + UEMA",
      "Monitoria de todas as disciplinas",
      "Aulas de História e Geo. do Maranhão",
      "Análise das obras literárias",
      "Simulados padrão ENEM e UEMA",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        {/* Promo Banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 md:p-8 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left flex-1">
                <span className="inline-block bg-white/20 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                  Promoção de Lançamento
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  30 dias de Acesso Livre
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  Faça seu cadastro agora e experimente a plataforma completa gratuitamente!
                </p>
              </div>
              <Button
                className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl shrink-0 transition-all"
                onClick={() => window.location.href = "https://cursometodo.ensinoagil.com.br/register"}
              >
                Cadastrar Grátis
              </Button>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Invista na sua Aprovação
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para seus objetivos. 
            Comece com 30 dias grátis.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 ${plan.color} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              {plan.isPopular && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm z-10">
                  Mais Escolhido
                </span>
              )}

              {/* Card Header */}
              <div className={`p-8 pb-6 ${plan.bgAccent}`}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm">
                  <plan.icon className={`w-7 h-7 ${plan.textAccent}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
                <p className="text-gray-600 mt-2 text-sm font-medium">{plan.description}</p>
              </div>

              {/* Pricing Options Container */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                
                {/* --- OPÇÃO MENSAL --- */}
                <div className="rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Plano Mensal
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-sm text-gray-500">R$</span>
                    <span className="text-3xl font-extrabold text-gray-900">
                      {plan.priceMonthly}
                    </span>
                    <span className="text-sm text-gray-500">/mês</span>
                  </div>

                  <a href={plan.linkMonthly} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button
                      variant="outline"
                      className="w-full font-bold rounded-lg border-2 border-gray-200 text-white hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
                    >
                      Assinar Mensal
                    </Button>
                  </a>
                </div>

                {/* --- OPÇÃO ANUAL (Destaque) --- */}
                <div className={`rounded-xl border-2 ${plan.bgAccent} ${plan.color.replace('border-', 'border-opacity-30 border-')} p-4 relative`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-bold uppercase tracking-wider ${plan.textAccent}`}>
                      Plano Anual
                    </span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full border border-green-200">
                      ECONOMIA DE 12%
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-sm text-gray-500">R$</span>
                    <span className="text-3xl font-extrabold text-gray-900">
                      {plan.priceAnnual}
                    </span>
                    <span className="text-sm text-gray-500">/ano</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    Parcele em até 12x no cartão
                  </p>

                  <a href={plan.linkAnnual} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button
                      className={`w-full font-bold rounded-lg text-white shadow-md transition-all ${plan.buttonColor}`}
                    >
                      Assinar Anual <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>

                {/* Features List */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3">
                    O que está incluso:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Todas as correções de redação são realizadas por chamada de vídeo com o professor.
          </p>
          <p className="text-emerald-600 font-semibold mt-2">
            Dúvidas? Entre em contato com o suporte.
          </p>
        </div>
      </div>
    </section>
  )
}