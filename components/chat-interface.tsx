"use client"

import type React from "react"

import { useChat } from "ai/react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Brain, User, Loader2, Dumbbell } from "lucide-react"

const suggestedQuestions = [
  "Oi, quero começar a treinar!",
  "Tenho 25 anos, peso 70kg e 1,75m",
  "Quero ganhar massa muscular",
  "Preciso perder peso, me ajuda?",
  "Treino para glúteos",
  "Como calcular meu IMC?",
  "Treino de braço para crescer",
  "Suplementos básicos",
  "Nutrição para hipertrofia",
]

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const [selectedQuestion, setSelectedQuestion] = useState<string>("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSuggestedQuestion = (question: string) => {
    setSelectedQuestion(question)
    handleInputChange({ target: { value: question } } as any)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    handleSubmit(e)
    setSelectedQuestion("")
  }

  return (
    <Card className="bg-gray-900 border-gray-700 h-[600px] flex flex-col">
      <CardHeader className="border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Hipertrofia.IA</h3>
            <p className="text-gray-400 text-sm">Seu personal trainer inteligente</p>
          </div>
          <div className="ml-auto">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Bem-vindo à Hipertrofia.IA! 💪</h4>
              <p className="text-gray-400 text-sm mb-4">
                Sou sua personal trainer virtual! Para criar o plano perfeito, me conte sua idade, sexo, altura, peso e objetivo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md mx-auto">
                {suggestedQuestions.slice(0, 6).map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === "user" ? "bg-blue-500" : "bg-gradient-to-r from-green-500 to-blue-500"
                    }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Brain className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-200"
                    }`}
                >
                  <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-green-400" />
                    <span className="text-sm text-gray-300">Hipertrofia.IA está pensando...</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 p-4">
          {messages.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedQuestions.slice(6).map((question, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer text-xs bg-gray-800 border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </Badge>
              ))}
            </div>
          )}

          <form onSubmit={onSubmit} className="flex space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Digite sua pergunta sobre treino, nutrição, suplementos..."
              className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
