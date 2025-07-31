"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChatInterface } from "@/components/chat-interface"
import {
  Dumbbell,
  Brain,
  Target,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Play,
  Calculator,
  Image,
  CloudLightningIcon as Lightning,
} from "lucide-react"

export default function HipertrofiaAI() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Hipertrofia.IA
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
              Chat IA
            </a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Preços
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by AI
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Sua IA Personal Trainer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transforme seu treino com inteligência artificial. Planos personalizados, acompanhamento em tempo real e
            resultados garantidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Experimente Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Chat Section - MOVIDO PARA CIMA */}
      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experimente a Hipertrofia.IA</h2>
            <p className="text-gray-400 text-lg">Faça perguntas sobre treinos, nutrição, suplementos e muito mais!</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="text-green-400 border-green-500/30">
                "Treino de braço para crescer"
              </Badge>
              <Badge variant="outline" className="text-blue-400 border-blue-500/30">
                "Calcular meu IMC"
              </Badge>
              <Badge variant="outline" className="text-purple-400 border-purple-500/30">
                "Nutrição para hipertrofia"
              </Badge>
              <Badge variant="outline" className="text-yellow-400 border-yellow-500/30">
                "Suplementos básicos"
              </Badge>
            </div>
          </div>

          <ChatInterface />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recursos Inteligentes</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tecnologia de ponta para maximizar seus resultados na hipertrofia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">IA Personalizada</CardTitle>
                <CardDescription className="text-gray-400">
                  Entende português com erros, gírias e responde como um personal trainer brasileiro
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Image className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Exercícios Visuais</CardTitle>
                <CardDescription className="text-gray-400">
                  Imagens e GIFs demonstrando a execução correta de cada exercício
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Cálculos Rápidos</CardTitle>
                <CardDescription className="text-gray-400">
                  IMC, TMB, macros e outros cálculos fitness instantâneos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightning className="w-6 h-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white">Respostas Instantâneas</CardTitle>
                <CardDescription className="text-gray-400">
                  Base de conhecimento com centenas de perguntas sobre hipertrofia
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Treinos Específicos</CardTitle>
                <CardDescription className="text-gray-400">
                  Planos detalhados para cada grupo muscular com técnicas avançadas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Personalidade Única</CardTitle>
                <CardDescription className="text-gray-400">
                  Motivação brasileira, gírias do fitness e dicas de quem entende do assunto
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400">Perguntas na Base</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-400">Exercícios com GIFs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Disponibilidade</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">🇧🇷</div>
              <div className="text-gray-400">100% Brasileiro</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Pronto para Transformar seu Físico?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de atletas que já estão usando IA para maximizar seus ganhos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Conversar com IA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Hipertrofia.IA
              </span>
            </div>
            <div className="text-gray-400 text-sm">© 2024 Hipertrofia.IA. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
