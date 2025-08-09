export const maxDuration = 30

const PYTHON_API_URL = process.env.PYTHON_API_URL || 'http://localhost:8000'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Enviar mensagens para o backend Python
    const response = await fetch(`${PYTHON_API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      throw new Error(`Erro na API Python: ${response.status}`)
    }

    const data = await response.json()

    return new Response(
      JSON.stringify({
        message: data.message,
        role: 'assistant'
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error('Erro ao conectar com backend Python:', error)

    // Fallback para resposta offline
    const fallbackMessage = `🤖 **Hipertrofia.IA Temporariamente Offline** 

Estamos com problemas técnicos no momento, mas posso te dar algumas dicas básicas:

💪 **TREINO BÁSICO:**
• Segunda/Quarta/Sexta: Corpo todo
• Agachamento: 3x15
• Flexão: 3x10
• Prancha: 3x30seg

🥗 **ALIMENTAÇÃO:**
• Proteína em cada refeição
• 8-10 copos de água/dia
• Evite açúcar em excesso

Tente novamente em alguns minutos! 🚀`

    return new Response(
      JSON.stringify({
        message: fallbackMessage,
        role: 'assistant'
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
